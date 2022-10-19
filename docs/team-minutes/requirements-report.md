
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

> The project will serve six user groups:

**New website users**

      - These users will be able to easily find all information regarding the trails and the city. The information will include different landmarks that discuss not only the trail but significant facts and information regarding the city at large. 
      - Website visitors could also get access to a virtual walkthrough of the entire trail. This will enable potential trail travelers to know more about the trail before they even start their wonderful journey.
      - This information will be frequently updated to reflect what is on ground hence ensuring users are viewing up to date information.
       - The best part is all this will be accessible through a website URL that is easily conceivable.


**Working professional users that want to raise funds**

      - Various working professionals in the community that are looking to raise funds will be able to do so through organizing weekly event challenges.
      - The Okanagan Rail Trail Ambassadors will be able to create events that are later on posted onto pages that are specially designated to showcasing upcoming community events.
      - The website will also display these events on a calendar. Ambassadors will be able to create and edit events on the calendar interface.
      - Using data collected from the organized events, the website will provide different challenge statistics such as the number of people participating in the challenge and the progress they’ve made in that challenge.
      - Authorized Okanagan Rail Trail Ambassadors and other authorized parties will be able to securely login into their accounts and review records of donations that have been securely transacted through the website. These records will be displayed on a page specially designated for that purpose.
      - Finally, the website will ensure ambassadors are able to communicate with the public through a public discussion forum.


**Trail explorers**

      - The website will display a map of the trail containing various features. These features will help users visualize what the map actually looks like on ground. These features will include icons that mark locations of history boards, landmarks, interesting facts, and alerts.
      - The website will be able to log various data from participants engaging in the weekly challenges such as their number of steps taken, exercise duration, and exercise frequency.
      - The website will also be able to organize the trail explorers into teams of their choices. The website will be able to generate invite links that other users can use to join the groups and weekly challenges.
      - The website will make ranked scoreboards of the participants using the logged information from the weekly challenges.


**Health-care professionals**

      - Health-care professionals will have a dashboard presenting well organized user health data submitted by various website users.
      - The website will allow health-care professionals to view the wellness challenge participants and their health information.
      - The website will present this data in a fashion that enables the professionals to make relevant inferences and feedback that helps improve the community.
      - The website will ensure that this health information is only accessed by publicly authorized personnel through ensuring only authorized users are securely logged in to the health-care professional dashboard.


**Homeless people**

      - Homeless people will be able to access various information on resources offered by the community and the contact information of the people in charge of directly providing these resources.
      - They will be able to do this through the landing page which will contain links directing these people in need to the help they deserve.
      - Homeless people will also be able to send messages to health professionals as well as community officers through submitting help forms on the website.

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

There are 4 dashboards - Public, Health Professional, Patients and Trail Ambassadors, further in the dfd each dashboard has subcategories which represent the features each will have. 

Public dashboard will provide users with trackers for getting stats for example steps - users will have to provide consent in order for this data to be saved on the database, this dashboard allows users to form teams in order to compete with each other which is a part of the wellness challenge, this page also provides users with a calender to view the upcoming events being organized on the trail.

Health Professional dashboard is for health professionals like dietitians to monitor users stats and provide feedback, they will be able to view teams that people have made for the wellness challenge and be able to directly provide feedback to the whole team or an individual.

Patients dashboard is for the homeless people who are looking for resources, it gives them a contact list as well as a form where they can request resources as they need them.

Finally, the Trail Ambassadors dashboard is for the people who are working in the trail itself to fundraise for events and such, this dashboard gives them a contact list to contact the small businesses and their colleagues alike as well as emergency services.it also provides them with  a calendar so they can schedule events.  

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

      - We have to make sure that we use programming languages that can be used across old as well as new technology, different devices.

**Maintenance Accessibility**

      - Finding qualified personnel for maintenance consultation in a timely manner will be a constraint that we have to work around. We can book the personnel on campus ahead of time for maintenance checks.

**Health Pandemic**

      - A pandemic will get health policies imposed that hinder people from attending various organized events such as the health challenges.

**Weather Fluctuations**

      - Dangerous weather conditions such as forest fires can have negative health repercussions. This encourages a low turnout to the various activities organized to fundraise other activities.
>>>>>>> 82fd769346a326f95254ddf733cd1f76cb2e6fbf
