import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient for gradients


const Stack = createStackNavigator();

// Import the logo
const logo = require('./assets/Empowerment.png');

// Define props interface for Home component
interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectCourse" component={SelectCourse} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthCourses} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCourses} />
        <Stack.Screen name="SixMonthCourseDetail" component={SixMonthCourseDetail} />
        <Stack.Screen name="SixWeekCourseDetail" component={SixWeekCourseDetail} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <LinearGradient colors={['#00bfff', '#000000']} style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.heading1}>Empowering the Nation</Text>
      <Text style={styles.description}>
        Skill development courses for domestic workers and gardeners.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SelectCourse')}>
        <Text style={styles.buttonText}>Select Course</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SixMonthCourses')}>
        <Text style={styles.buttonText}>View Six Month Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SixWeekCourses')}>
        <Text style={styles.buttonText}>View Six Week Courses</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const SelectCourse: React.FC<{ navigation: NativeStackNavigationProp<any> }> = ({ navigation }) => {
  const courses = [
    { name: 'First Aid', fee: 1500 },
    { name: 'Sewing', fee: 1500 },
    { name: 'Landscaping', fee: 1500 },
    { name: 'Life Skills', fee: 1500 },
    { name: 'Child Minding', fee: 750 },
    { name: 'Cooking', fee: 750 },
    { name: 'Garden Maintenance', fee: 750 },
  ];

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [totalFee, setTotalFee] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleSelectCourse = (course: string, fee: number) => {
    if (!selectedCourses.includes(course)) {
      setSelectedCourses([...selectedCourses, course]);
      setTotalFee(totalFee + fee);

      let newDiscount = 0;
      const courseCount = selectedCourses.length + 1;

      if (courseCount === 2) newDiscount = 5;
      else if (courseCount === 3) newDiscount = 10;
      else if (courseCount > 3) newDiscount = 15;

      setDiscount(newDiscount);
    } else {
      Alert.alert('Course already selected!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.heading}>Select Your Courses:</Text>
      {courses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={styles.courseButton}
          onPress={() => handleSelectCourse(course.name, course.fee)}
        >
          <Text style={styles.buttonText}>{course.name} - R{course.fee}</Text>
        </TouchableOpacity>
      ))}
  
      <Text style={styles.description1}>
        Total Courses Selected: {selectedCourses.length}
      </Text>
      <Text style={styles.description1}>
        Total Fee: R{totalFee - (totalFee * discount) / 100} (Discount: {discount}%)
      </Text>
  
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cart', { selectedCourses, totalFee, discount })}
      >
        <Text style={styles.buttonText}>Go to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
  
};

const Cart: React.FC<{ route: any }> = ({ route }) => {
  const { selectedCourses, totalFee, discount } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      <Text style={styles.description1}>Selected Courses:</Text>
      {selectedCourses.map((course: string, index: number) => (
        <Text key={index} style={styles.courseText}>
          {course}
        </Text>
      ))}
      <Text style={styles.summaryText}>
        Total: R{totalFee - (totalFee * discount) / 100} (Discount: {discount}%)
      </Text>
    </View>
  );
};

// Six Month Courses Summary Page
const SixMonthCourses: React.FC<{ navigation: NativeStackNavigationProp<any> }> = ({ navigation }) => {
  const courses = ['First Aid', 'Sewing', 'Landscaping', 'Life Skills'];

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.heading}>Six Month Courses</Text>
      {courses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={styles.courseButton}
          onPress={() => navigation.navigate('SixMonthCourseDetail', { course })}
        >
          <Text style={styles.buttonText}>{course}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Six Week Courses Summary Page
const SixWeekCourses: React.FC<{ navigation: NativeStackNavigationProp<any> }> = ({ navigation }) => {
  const courses = ['Child Minding', 'Cooking', 'Garden Maintenance'];

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.heading}>Six Week Courses</Text>
      {courses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={styles.courseButton}
          onPress={() => navigation.navigate('SixWeekCourseDetail', { course })}
        >
          <Text style={styles.buttonText}>{course}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Course Details for Six Month Courses
const SixMonthCourseDetail: React.FC<{ route: any }> = ({ route }) => {
  const course = route.params.course;
  const courseDetails: { [key: string]: any } = {
    'First Aid': {
      fee: 'R1500',
      purpose: 'To provide first aid awareness and basic life support',
      content: ['Wounds and bleeding', 'Burns and fractures', 'Emergency scene management', 'CPR', 'Choking'],
    },
    'Sewing': {
      fee: 'R1500',
      purpose: 'To provide alterations and new garment tailoring services',
      content: ['Types of stitches', 'Threading a sewing machine', 'Sewing buttons, zips, hems and seams', 'Alterations', 'Designing and sewing new garments'],
    },
    'Landscaping': {
      fee: 'R1500',
      purpose: 'To provide landscaping services for new and established gardens',
      content: ['Indigenous and exotic plants and trees', 'Fixed structures', 'Balancing plants in a garden', 'Aesthetics of plant shapes and colors', 'Garden layout'],
    },
    'Life Skills': {
      fee: 'R1500',
      purpose: 'To provide skills to navigate basic life necessities',
      content: ['Opening a bank account', 'Basic labor law', 'Basic reading and writing literacy', 'Basic numeric literacy'],
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.heading}>{course}</Text>
      <Text style={styles.description1}>Fee: {courseDetails[course].fee}</Text>
      <Text style={styles.description1}>Purpose: {courseDetails[course].purpose}</Text>
      <Text style={styles.description1}>Content:</Text>
      {courseDetails[course].content.map((item: string, index: number) => (
        <Text key={index} style={styles.courseText}>
          - {item}
        </Text>
      ))}
    </ScrollView>
  );
};

// Course Details for Six Week Courses
const SixWeekCourseDetail: React.FC<{ route: any }> = ({ route }) => {
  const course = route.params.course;
  const courseDetails: { [key: string]: any } = {
    'Child Minding': {
      fee: 'R750',
      purpose: 'To provide awareness of child safety and development',
      content: ['First aid for babies and children', 'Child safety', 'Child development', 'Age-appropriate activities'],
    },
    'Cooking': {
      fee: 'R750',
      purpose: 'To provide basic cooking skills and food safety knowledge',
      content: ['Knife skills', 'Food safety', 'Basic recipes', 'Meal planning'],
    },
    'Garden Maintenance': {
      fee: 'R750',
      purpose: 'To provide knowledge of garden care and maintenance',
      content: ['Pruning techniques', 'Seasonal planting', 'Weed control', 'Soil health'],
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.heading}>{course}</Text>
      <Text style={styles.description1}>Fee: {courseDetails[course].fee}</Text>
      <Text style={styles.description1}>Purpose: {courseDetails[course].purpose}</Text>
      <Text style={styles.description1}>Content:</Text>
      {courseDetails[course].content.map((item: string, index: number) => (
        <Text key={index} style={styles.courseText}>
          - {item}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
    // ... existing styles
    scrollContainer: {
      flexGrow: 1, // Ensures that the ScrollView can expand
      justifyContent: 'flex-start', // Aligns content to the start
    },
  
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100, // This makes it round
    overflow: 'hidden', // Ensures that the image fits within the border
},

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  description1: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#0056b3', // A darker blue for the border
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
  courseButton: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  courseText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default App;
