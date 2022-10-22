
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
&nbsp;      1.3 Technology Stack  <br>
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

We decided to use HTML and CSS as these are the building blocks of any website. In addition, we are using Bootstrap with CSS as this helps our website be responsive enough to run on any device regardless the screen width. Javascript will be used for validating form inputs to prevent data attacks like SQL injections. <br>
We decided to use Django against other frameworks like FastAPI and Flask because of the ease of coding, updated documentation, and its compatibility with HTML. The client believes that Django has all the functionality that is needed for the website she wants us to build while other frameworks are lacking in some areas. It also provides a lot of built-in libraries and APIs which will help us in our project.<br>
We are using Figma for designing as this tool helps us work on the designs together collaboratively. Moreover, we can create design prototypes in Figma which is helpful when showing these designs to the client as they can interact with the prototype rather than imagine how navigating through the pages would work.<br>


**Back-end and Database**

&nbsp; 1. MySQL database integrated in MariaDB. <br>
&nbsp; 2. Django <br>

The backend was provided to us by the client as she already has a database made in MySQL and wants to integrate it with MariaDB.
<br>

**Testing and Bug Tracking**

&nbsp; 1. Github issues for bug tracking. <br>
&nbsp; 2. Pytest for code testing. <br>
&nbsp; 3. MS-Excel for keeping a code testing record. <br>

The client requested us to use GitHub issues for bug tracking since all of our code will be put into a GitHub repository and that way, she will be able to view our progress. In addition, using GitHub issues reduces the number of softwares and programs that will need to be installed onto our personal computers. This tool is also beneficial because we have integrated GitHub notifications to our group’s Discord server, so all members are notified immediately once an issue has been created so that we can rectify them in a timely manner. <br>


## DFD level 0 

![](../images/dfd-level0.png?raw=true)

**Description:** 

This is a high-level representation of what our project will look like. When users visit the website by either scanning a QR code or typing in the URL, they will be directed to the home page which has content pages containing messages from the trail ambassadors of the Okanagan Rail Trail, the contact information of the affiliates, and an interactive map created by the Okanagan Rail Trail which will allow users to locate different landmarks along the trail. In addition, users will be able to log in or create an account to access the specific dashboards, depending on what type of user group they are in and what role they have been assigned. This will be completed by Milestone #2 in time for round one of peer testing.

There are five dashboards available on this website: Individual, Patient, Professional, Trail Ambassador, and Administrator. Within each dashboard, there are various subcategories that contain different features of the website that are unique to the dashboard. All five dashboards should be completed and fully functional by the time we reach Milestone #4. 

The *individual* dashboard contains a tracker page that will allow users to enter data such as the number of steps taken in a day, the number of hours slept, etc. Prior to being able to access the tracker page, the user must provide consent in order for this data to be saved into the database. From this data that they enter into the database, the users will be able to view graphs that have been generated automatically by the system. In addition, these users will be able to view a calendar with upcoming events entered into the system by the trail ambassadors. Lastly, users will be able to access a weekly challenge page where users can form teams in order to compete with each other in the wellness challenge, view a leaderboard, and communicate with other participants. This dashboard will be mostly completed by Milestone #2 for the first round of peer testing, however, it is not confirmed if it will be fully completed in time as there are many features to implement.

*Patients* dashboard is part of the individual dashboard, it will display the data from the database which the professionals have provided for different teams/individuals. This dashboard will be completed by Milestone #3 for the second round of peer testing. We can only begin working on this dashboard once the individual dashboard is completed. 

The *professional view* dashboard is for working professionals like doctors and dietitians to monitor users’ statistics through the graphs generated from the tracker data they enter and provide feedback. They will also be able to group users together to provide feedback to the group as a whole. If the project is on track, we hope to have this dashboard completed by Milestone #3.

The *trail ambassador* dashboard is for the people who are working with the Okanagan Rail Trail to fundraise for events. This dashboard gives them a contact list to the affiliates and their colleagues as well as emergency and non-emergency services. It also provides them with the functionality to schedule events into the calendar which all users have access to viewing. This dashboard should be completed by Milestone #3 along with the professional dashboard.

The *admin* dashboard is used by the trail ambassadors and our client to approve new user accounts, this allows them to ensure that the correct people are joining different categories of users and have access to the necessary dashboards. As this dashboard only has one feature at the moment and is used by the trail ambassadors, it will be implemented after the trail ambassador dashboard. If there are no issues with implementing the other dashboards, this should be completed by Milestone #3, but can also be pushed a little later without affecting our progress too much as there is not too much functionality associated with it.

professionals to view this data, they will also be able to view these graphs in the heath statistics page. When the professionals give feedback to the user, it is stored in the database and validated to ensure security of the data. This will be completed by Milestone #3 with the professional dashboard. 
Similarly, the events that the trail ambassadors create and add to the calendar will also be stored in a database. In case any errors are found while validating or attempting to store any of the data, an error code is generated and the user is redirected to the previous page where they are prompted to try again. This should be completed by Milestone #3 with the trail ambassador dashboard.

 

## DFD level 1 

![](../images/dfd-level1.png?raw=true)

=======
There are 4 dashboards - Public, Health Professional, Patients and Trail Ambassadors, further in the dfd each dashboard has subcategories which represent the features each will have. 

Public dashboard will provide users with trackers for getting stats for example steps - users will have to provide consent in order for this data to be saved on the database, this dashboard allows users to form teams in order to compete with each other which is a part of the wellness challenge, this page also provides users with a calender to view the upcoming events being organized on the trail.

Health Professional dashboard is for health professionals like dietitians to monitor users stats and provide feedback, they will be able to view teams that people have made for the wellness challenge and be able to directly provide feedback to the whole team or an individual.

Patients dashboard is for the homeless people who are looking for resources, it gives them a contact list as well as a form where they can request resources as they need them.

Finally, the Trail Ambassadors dashboard is for the people who are working in the trail itself to fundraise for events and such, this dashboard gives them a contact list to contact the small businesses and their colleagues alike as well as emergency services.it also provides them with  a calendar so they can schedule events.  

## DFD level 1 

![](../images/dfd-level1.png?raw=true)


**Description:**


The login process involves the user entering their email and password. This data is then queried in the database where it is authenticated to check if the user exists in the database. If the account exists and the correct email-password combination was entered, a success message is returned and the user can login to the dashboard their credentials give them access to. However, if the user does not exist in the database, or the incorrect credentials were entered, an error message is displayed and the user is prompted to enter the account credentials again. This will be completed along with the homepage by Milestone #2
The tracker data is stored in the database, provided the users have consented to doing so. This data is then used to generate graphs to provide the user with a visual representation of their data. Ideally, this would be completed by Milestone #2, but will definitely be done by Milestone #3 if there were any issues. 

If the user has given permission to the professionals to view this data, they will also be able to view these graphs in the heath statistics page. When the professionals give feedback to the user, it is stored in the database and validated to ensure security of the data. This will be completed by Milestone #3 with the professional dashboard. 

Similarly, the events that the trail ambassadors create and add to the calendar will also be stored in a database. In case any errors are found while validating or attempting to store any of the data, an error code is generated and the user is redirected to the previous page where they are prompted to try again. This should be completed by Milestone #3 with the trail ambassador dashboard.


## Functional Requirements

> There are **five** dashboard cartegories - Individual, Trail Ambassador, Administrator, Professional and Patient dashboards. further in the dfd, each dashboard has subcategories which represent the features each will have, we also have a landing page.. 

**Professional Dashboard**

- The professional dashboard is where the data is turned into relevant information by different personnel. But before this process can begin, the users must first consent to the utility of their information for different purposes explained in the privacy policy.
- Through this dashboard, the professionals that work in Dr. Robert Petrella’s Lifestyle Prevention Program will be able to retrieve various user data collected such as physical activities, foods consumed, blood pressure, weight, and even average cigarettes smoked. The physical data will be tabulated to reflect program progress and will be presented alongside graphs, hence enhancing readability and understanding. Different kinds of graphs will be available to select from given varying preferences. Furthermore, users will be categorized into groups and given a rating of poor, good, etc. to compare the progress between other groups. 
- Using the various data collected, the professional will be able to perform specialized diagnoses for each consented user and come to relevant conclusions that will benefit the user. This feedback could contain recommendations on lifestyle changes that can act as targets that the user should try to attain. These changes could have something to do with sleeping, smoking, or physical activity habits. Once the professional has generated feedback, it will be displayed back to the user with the appropriate graphs.
- We aim to begin building this dashboard at the beginning of February and have it completed by mid-March.

**Patient Dashboard**

- The patient dashboard is accessed by the consented individuals user group and consists of pages where graphs will be displayed to visualize physical activity data, health data, and dietary data.The health data could include number of hours slept in a day and the number of cigarettes smoked in a given time period. Dietary information visualized could include the average fruit and vegetable servings consumed per time period specified and the number of servings consumed during breakfast. The different kinds of data graphically rendered on the dashboards will be utilized by Dr. Petrella’s health professionals team to provide relevant health feedback to the community members of Lake Country. 
- What makes this different from the individual dashboard is that there will be a box next to these graphs where the user can see the comments relevant to that graph that the certified professionals made. In addition, there will be a to-do list where users can easily view the advice the professionals have given them for the week to follow at a glance. 
- We aim to start working on this project in mid February and have it completed by mid March. 

## Testing Strategy

Testing is extremely important. Therefore, the right testing strategy can aid in identifying any possible defect with the code while also ensuring continuous integration of new features is being adopted with no issues. We have decided to test our code using a regression testing approach.

Regression testing is a type of software testing that runs after every change made to the code; This is done to ensure that any additional change (additional features) is integrated without any unintended breaks. Essentially, we are avoiding the possibility of an old bug breaking the code in the later stages of the project.

For our initial features, we will be running unit tests for every code addition. We do so to ensure that we have a solid base, a code that lacks bugs. Doing so will allow us to perform regression testing for the additional features we add as we move on. We have to be selective with the tests we run as it may not feasible to test every single code addition added to our repository.

<strong>Testing Tools</strong>

For our unit testing, we will be using Pytest as our software testing framework, this will be extremely useful and compatible since we are using Django for both frontend and backend. Pytest is also extremely efficient in the sense that it will allow us to execute multiple tests parallely.

Finally, we will be conducting some usability testing to ensure that our dashboard designs do what we intend them to do. To do that, we have to develop the mock designs of our different dashboards on Figma and then run some usability testing to gather feedback from different users. This will allow us to identify the most ideal placement and format for the features in our dashboards.



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

