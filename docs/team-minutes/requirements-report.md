
# Requirements Report


## Created by:
> Abdulaziz Almutlaq - 79960175 <br>
Maysey Lu - 19226646 <br>
Jordan Onwuvuche - 61007530 <br>
Harman Sahota - 28337426 <br>
>>
<br>

## Table of Contents
<br>


1. Project Description  <br>
&nbsp;	1.1 Overview  <br>
&nbsp;	1.2 Target User Groups <br>
&nbsp;  1.3 Technology Stack  <br>
2. System Architecure 	<br>
&nbsp;  2.1 Data Flow Diagrams (DFDs) <br>
3. Requirements <br>
&nbsp;   3.1 Functional Requirements <br>
&nbsp;   3.2 Non-functional Requirements <br>
&nbsp;   3.3 Environmental Constraints <br>
4. Testing Strategy <br>
&nbsp;   4.1 Testing Tool <br>
&nbsp;   4.2 Testing Techniques

<br>

--- 

## Overview

Alongside Dr. Barbara Marcolin and two other groups from this course, we are designing and refining the online community platform, HEALTHENOW.com, that was created by Dr. Marcolin and her team before the pandemic. The purpose of this website is to allow small businesses and non-profit organizations to use this technology who otherwise would not have access to it due to insufficient funding.

The Okanagan Rail Trail is supported by Friends of the Okanagan Rail Trail (FORT), which is a non-profit organization that consists of local volunteers. They are the ones that organize activities and fundraisers and increase user experience on the trail. To support this group, the online platform we are creating will be used to host their wellness challenge, which is one of their annual fundraising events. In addition, this website will include information about the Okanagan Rail Trail to help promote and spread awareness of the efforts FORT has done to increase user trail experience, such as storyboards placed along the trail that tell the origins, history, and stories of the Okanagan Rail Trail.

In addition, this website will also allow health professionals such as doctors, nurses, and dieticians from Dr. Robert Petrella’s Lifestyle Prevention Program to oversee the progress and statistics of the wellness challenge participants to provide free consultations to Lake Country users.

## Target User Groups

> The final product of this project is designed to serve **four** main user groups: individuals, consented individuals, working professionals, and trail ambassadors. :

**Individuals**

      - This user group represents the members of Lake Country. For this group, the website will display a map of the trail with markings. These marks are utilized to demonstrate the relative locations of different features that are placed on the trail by the management team. These features could be history boards, landmarks, interesting facts, and alerts.
      - These individuals will grant consent to the Okanagan Rail Trail to have their activity data stored on the organization database.
      - If the individuals grant another consent regarding the health professionals, the website could then provide new functionality that is described in the next user group.
      - Nonetheless, the individuals will still be able to participate in organized weekly challenge activities.

**Consented Individuals**

      - If the residents of Lake Country agree to let the Okanagan Rail Trail management collect their data, the website will be able to log various data from them.
      - They will be able to record their activity data from participating in organized weekly challenge activities, such as but not limited to the number of steps taken, exercise duration, and exercise frequency.
      - Such data will be utilized by Dr. Petrella’s team of health individuals as described in the next user group.
      - The website will also be able to organize the trail explorers into teams of their choices. The website will be able to generate invite links that other users can use to join the groups and weekly challenges.
      - The website will make ranked scoreboards of the participants using the logged information from the weekly challenges.

**Professionals**

      - Health-care professionals will have a dashboard presenting well organized user health data submitted by various website users.
      - The website will allow health-care professionals to view the wellness challenge participants and their health information.
      - The website will present this data in a fashion that enables the professionals to make relevant inferences and feedback that helps improve the community.
      - The website will ensure that this health information is only accessed by publicly authorized personnel through ensuring only authorized users are securely logged in to the health-care professional dashboard.

**Trail Ambassadors**

      - Various working professionals in the community that are looking to raise funds will be able to do so through organizing weekly event challenges.
      - The Okanagan Rail Trail Ambassadors will be able to create events that are later on posted onto pages that are specially designated to showcasing upcoming community events.
      - The website will also display these events on a calendar. Ambassadors will be able to create and edit events on the calendar interface.
      - Using data collected from the organized events, the website will provide different challenge statistics such as the number of people participating in the challenge and the progress they’ve made in that challenge.

## Tech Stack

**Front-End:**

&nbsp; 1. HTML <br>
&nbsp; 2. CSS with Bootstrap <br>
&nbsp; 3. Java script <br>
&nbsp; 4. Django CMS <br>
&nbsp; 5. Figma for designing <br>

**Back-end and Database**

&nbsp; 1. MySQL database integrated in MariaDB. <br>
&nbsp; 2. Django <br>

**Testing and Bug Tracking**

&nbsp; 1. Github issues for bug tracking. <br>
&nbsp; 2. Pytest for code testing. <br>
&nbsp; 3. MS-Excel for keeping a code testing record. <br>

## DFD level 0 

![](../images/dfd-level0.png?raw=true)

**Description:** 

This is a high-level representation of what our project will look like. The user will be able to scan a QR-Code or visit a link to access the website, which will lead them to the home-page, the home-page will provide them with an option to visit the various dashboards in the website, each dashboard has a login to ensure the correct type of user is getting access to it.

When Users visit the website, they will be shown the home page which provides the options to see a basic contact list of the trail staff,  as well as view a interactive map of the trail which will allow users to locate different landmarks along the trail . Users will also be able to view an about page which will provide information of the team organizing events on the trail.

## Functional Requirements

> There are **six** dashboard cartegories - Homepage, Individual, Trail Ambassador, Administrator, Professional and Patient dashboards. further in the dfd, each dashboard has subcategories which represent the features each will have. 

**Professional Dashboard**

- The professional dashboard is where the data is turned into relevant information by different personnel. But before this process can begin, the users must first consent to the utility of their information for different purposes explained in the privacy policy.
- Through this dashboard, the professionals that work in Dr. Robert Petrella’s Lifestyle Prevention Program will be able to retrieve various user data collected such as physical activities, foods consumed, blood pressure, weight, and even average cigarettes smoked. The physical data will be tabulated to reflect program progress and will be presented alongside graphs, hence enhancing readability and understanding. Different kinds of graphs will be available to select from given varying preferences. Furthermore, users will be categorized into groups and given a rating of poor, good, etc. to compare the progress between other groups. 
- Using the various data collected, the professional will be able to perform specialized diagnoses for each consented user and come to relevant conclusions that will benefit the user. This feedback could contain recommendations on lifestyle changes that can act as targets that the user should try to attain. These changes could have something to do with sleeping, smoking, or physical activity habits. Once the professional has generated feedback, it will be displayed back to the user with the appropriate graphs.
- We aim to begin building this dashboard at the beginning of February and have it completed by mid-March.

**Patient Dashboard**

- The patient dashboard is accessed by the consented individuals user group and consists of pages where graphs will be displayed to visualize physical activity data, health data, and dietary data.The health data could include number of hours slept in a day and the number of cigarettes smoked in a given time period. Dietary information visualized could include the average fruit and vegetable servings consumed per time period specified and the number of servings consumed during breakfast. The different kinds of data graphically rendered on the dashboards will be utilized by Dr. Petrella’s health professionals team to provide relevant health feedback to the community members of Lake Country. 
- What makes this different from the individual dashboard is that there will be a box next to these graphs where the user can see the comments relevant to that graph that the certified professionals made. In addition, there will be a to-do list where users can easily view the advice the professionals have given them for the week to follow at a glance. 
- We aim to start working on this project in mid February and have it completed by mid March.

## DFD level 1 

![](../images/dfd-level1.png?raw=true)

**Description:**


In this level of the dfd, the system process can be seen in a slightly more deeper level than the level 0 dfd.

The login process involves the user entering the username and password, this data is then queried in the database, the authentication process involves checking if the user exists in the database, if it does a success is returned and the user can successfully login to the dashboard their credentials give them access to, however if the user does not exist in the database, the user returns to the homepage and an error message is returned and displayed.

Further, the Trackers data, is stored in the database, provided the users have consented and can be accessed by the medical professionals in the Health Stats page of the health professional dashboard, where they can provide feedback to users based on this data, this feedback form is validated as well to ensure security of the data.

Similarly, the help form in the patients dashboard is validated and the data is stored in the database and the calendar events in the trail ambassadors dashboard are also stored in the database, all this data is viewable to authorized and appropriate user groups. 

In case any errors are found while validating any of the forms, an error code is generated and the user is redirected to the previous page and the generated error message is shown to the user.

## Functional Requirements

|Page|Functions|Completed by Milestone|
|----|---------|---------|
|Homepage|- Users are able to login or create an account <br/> - Users can request to change password if they forget it* <br/> - Access to general information <br/> - News and announcements* <br/> - FAQ page* <br/> Contact page <br/> - Can view contact information of people involved <br/> - Able to send a message and select who to direct the message to*|2|
|Public|Able to input data for the weekly challenges (i.e. exercise duration/distance, steps, blood pressure, etc.) <br/> - Can convert inputted data into graphics and display it back <br/> - Can register teams for the weekly challenges <br/> - System creates team and generates invite code to send to friends|2 & 3|
|Trail Ambassadors|- Able to view calendar of scheduled events <br/> - Can create new events, update current events, or delete upcoming events <br/> - Able to view statistics <br/> - Number of people participating in the challenge <br/> - Overall progress of the challenge <br/> - Able to view and reply to messages from public directed to them*|3|
|Health Professional|- Able to view a list of participants in the wellness challenge <br/> - Able to view the participants’ health statistics <br/> - Able to give feedback to the participants|3|
|Patients|- Able to access a list of resources and contact information <br/> - Able to send a message to health professionals <br/> - Able to submit help forms|3|

*Note: If there is a * next to it, it is not a key feature.*


## Testing Strategy

Throughout the project there are a vast range of tests that we need to run to run to ensure that the website is functioning how we intend it to function.

<Strong>Functionality & Usability Testing:</strong> This will ensure that the website is in its correct behavior and that it does what is intended from it to do. Moreover, this will also help us verify the behind the scenes such as the connection to the database.

<Strong>Compatibality Testing:</strong> To ensure that the website is reliable and functional, and that is runs on its intended devices such as the clients device as well as the target audience as a whole.

<Strong>Performance Testing:</strong> Performance testing are extremely important. This will ensure that the system performs well under different user stress and load.

we will have to perform stress and load tests.

## Environmental Constraints

*Environmental constraints are the characteristics in the environment that change the level of difficulty of a task or activity when it is performed in that environment.*

> A detailed list of environmental constraints:

**Programming Languages**

- We have to make sure that we use programming languages that can be used across old as well as new technology, different devices, and operating systems. This means that the technologies used should possess versatility and portability characteristics. This presents us with a challenge whose solutions we have fortunately derived. These technologies might have to be updated given the rapidly changing technology landscape.

**Maintenance Accessibility**

- The project currently faces two main constraints in this regard. The first is finding qualified personnel for maintenance consultation in a timely manner. A solution the team has come up with is to book qualified personnel on campus ahead of time for maintenance checks. The second maintenance constraint is to ensure the software is left in a structural state that is easily grasped by any other qualified personnel and also sustainable for the longest time possible. This is why the team has chosen the Django content management system whose structural infrastructure fits the goals of the project.

**Health Tragedies**

- In this day and age, we face increasing unprecedented health tragedies of various scales with the most recent being the global Coronavirus pandemic. If another pandemic or similar health tragedy arises , the Lake Country and Okanagan community could witness identical health protection policies imposed on them. These policies could inhibit them from hosting and participating in outdoor, physical activities and events.

**Weather Fluctuations**

- Similarly, we face increasing unprecedented weather calamities on increasing scales. The Okanagan area has recently been a host to increasing forest fires and heat waves. To fan the flames, the proximity to the United States and the valley landscape make the Okanagan a suitable host to the traversing smoky winds. These dangerous weather conditions such as forest fires can have extremely detrimental health repercussions. Thus, these risks could heavily influence low participation in weekly challenges that involve outdoor activities.
>>>>>>> 82fd769346a326f95254ddf733cd1f76cb2e6fbf
