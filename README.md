# **XHAW React Native App and Website**

## **Project Title and Overview**
This repository contains:
1. A **React Native App**: An interactive mobile application showcasing features like navigation, user interaction, and styling.
2. A **Static Website**: A series of HTML pages representing various sections of an online platform for skills training.

The goal of this project is to provide an engaging, functional, and aesthetically pleasing user experience across both platforms.

---

## **App Features**
### React Native App
1. **Interactive Navigation**: A stack-based navigation system for seamless transitions between screens.
2. **Dynamic User Interface**: Styled with modern design elements like gradients (`LinearGradient`) and responsive layouts.
3. **Alerts and Notifications**: User interactions are met with visual feedback (e.g., `Alert` pop-ups).
4. **Logging**: Console logs added to track user actions, such as navigation and interactions.

### Static Website
1. **Responsive Design**: A clean layout styled using custom CSS (`present.css`) and libraries like FontAwesome.
2. **Comprehensive Pages**: Dedicated sections for courses, pricing, and inquiries.
3. **Social Media Integration**: Links and pages dedicated to platforms like Facebook and Twitter.

---

## **Installation Instructions**
### React Native App
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-link.git
   ```
2. Navigate to the app directory:
   ```bash
   cd react-native-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm start
   ```

### Static Website
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-link.git
   ```
2. Navigate to the website directory:
   ```bash
   cd website
   ```
3. Open `index.html` (or any HTML file) in a browser.

---

## **Code Walkthrough**
### React Native App
- **Navigation and Screens**: The app uses `createStackNavigator` for screen transitions.
- **Logging Example**:
  ```javascript
  console.log('Navigating to Home Screen'); // Tracks user navigation.
  ```
- **Dynamic Styling**: Incorporates gradients via `LinearGradient` for modern UI.

### Website
- **HTML Structure**: Follows semantic HTML with external stylesheets for modular design.
- **CSS Integration**: `present.css` provides custom styling for responsive layouts.
- **JavaScript for Pricing**: Adds interactivity to the `pricing.html` page.

---
## **Group Contributions**
- **[Your Name]**: Developed the React Native app and website features.
- **[Other Team Members]**: Assisted with content creation and testing.

---

## **Code Requirements**
- **Logging**: Added in the app to demonstrate functionality (e.g., navigation and user actions).
- **Comments**: Included throughout the code to explain logic and functionality.
- **Completeness**: All files are fully functional and well-structured.

---

Here are some additional sections:

---

## **Table of Contents**
1. [Project Title and Overview](#project-title-and-overview)  
2. [App Features](#app-features)  
3. [Installation Instructions](#installation-instructions)  
4. [Code Walkthrough](#code-walkthrough)  
5. [Video Presentation](#video-presentation)  
6. [Group Contributions](#group-contributions)  
7. [Code Requirements](#code-requirements)  
8. [Challenges Faced](#challenges-faced)  
9. [Future Improvements](#future-improvements)  
10. [Acknowledgments](#acknowledgments)  
11. [License](#license)

---

## **Challenges Faced**
### React Native App
- **State Management**: Managing the dynamic state of navigation and user actions required careful attention to React Native lifecycle methods.
- **Styling Issues**: Ensuring a responsive and visually appealing layout across different devices was challenging but resolved using `StyleSheet`.

### Website
- **Cross-Browser Compatibility**: Ensuring consistent performance and appearance across browsers required thorough testing.
- **Media Integration**: Optimizing images and external stylesheets for faster loading times.

---

## **Future Improvements**
### React Native App
1. **State Management Upgrade**: Integrate Redux or Context API for better state handling in larger apps.
2. **Accessibility Features**: Add support for screen readers and improve keyboard navigation for differently-abled users.

### Website
1. **Interactive Forms**: Enhance forms with validation and error handling.
2. **SEO Optimization**: Add meta tags, structured data, and alt text to improve search engine ranking.

---

## **Testing and Validation**
### App Testing
- **Unit Testing**: Tested individual components using console logs and manual interaction.
- **Device Testing**: Verified app functionality on both iOS and Android emulators.

### Website Testing
- **Validation**: Checked the HTML and CSS using [W3C validators](https://validator.w3.org/).
- **Cross-Browser Testing**: Tested on Chrome, Firefox, and Edge for consistency.

---

## **Acknowledgments**
- **Wellcom**: For guidance throughout the project.
- **Team Members**: Mfundo Sboniso Msweli, Sefako Siphosethu Mongalo, Michael Phumelela Khumalo, Owokugcina Ntuli

---

## **License**
This project is licensed under the MIT License.  
Feel free to modify or distribute the project under the terms of this license.

---

## Optimizing the Expo App and Reducing APK Size  

To optimize the Expo app and reduce the APK size for uploading to GitHub, I made the following changes:  

### **Development Environment and Configuration**  
- Ensured the development environment was correctly set up for a production build.  
- Configured the `eas.json` file with settings to target a production environment and set the build type to APK.  
- Removed unnecessary settings like `optimizeForSize` that caused validation errors.  
- Streamlined the `app.json` configuration by specifying only essential assets and metadata such as:  
  - App icon  
  - Splash screen  
  - Adaptive icon  
- Added a unique Android package name for proper identification.  

### **Code and Dependency Optimization**  
- Reviewed the app code and identified unnecessary libraries and assets.  
- Removed unused dependencies to minimize the app's footprint.  
- Compressed large image files and utilized optimized formats to reduce storage requirements.  
- Resized images and ensured that only referenced assets were included in the build process.  

### **Building the APK**  
- Utilized the EAS CLI to build the APK in production mode.  
- Resolved compatibility issues specific to the Windows environment.  
- Ensured build scripts and dependencies were aligned with production requirements, avoiding the inclusion of unnecessary development libraries.  

### **Verification and Results**  
- Verified the final APK size, ensuring it was below 100MB to meet GitHub's upload requirements.  
- Maintained app functionality and design while creating an optimized version ready for sharing and deployment.  

This streamlined and efficient build process has prepared the app for deployment, ensuring a smaller footprint without compromising quality or user experience.  

---

## New Features Added to the Website  

### **Download Our App Button**  
- Added a **"Download Our App"** button to the footer section of the website.  
- The button links directly to a Google Drive folder containing the APK file for the **Empowering the Nation** mobile application.  
- This feature allows users to seamlessly transition from the website to the mobile application by downloading the APK file.  

### **Social Media Integration**  
- Added functional links to the social media icons available on every main page of the website.  
- Each icon links directly to its respective social media platform, providing users with easy access to our official social media pages.  

These enhancements aim to improve user engagement and provide convenient access to both the mobile application and social media platforms.  
