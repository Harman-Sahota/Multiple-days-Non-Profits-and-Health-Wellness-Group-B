# Requirements Report

## Created by:

> Abdulaziz Almutlaq - 79960175 <br>
> Maysey Lu - 19226646 <br>
> Jordan Onwuvuche - 61007530 <br>
> Harman Sahota - 28337426 <br>
>
> > <br>

## Table of Contents

<br>

1. Project Description <br>
   &nbsp; 1.1 Overview <br>
   &nbsp; 1.2 Target User Groups <br>
   &nbsp; 1.3 Technology Stack <br>
2. System Architecure <br>
   &nbsp; 2.1 Data Flow Diagrams (DFDs) <br>
3. Requirements <br>
   &nbsp; 3.1 Functional Requirements <br>
   &nbsp; 3.2 Non-functional Requirements <br>
   &nbsp; 3.3 Environmental Constraints <br>
4. Testing Strategy <br>
   &nbsp; 4.1 Testing Tool <br>
   &nbsp; 4.2 Testing Techniques

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

&nbsp; 1. HTML
&nbsp; 2. CSS with Bootstrap
&nbsp; 3. Java script
&nbsp; 4. Django\*\*

**Back-end and Database**

&nbsp; 1. MySQL database integrated in MariaDB.
&nbsp; 2. FastAPI\*\*

**Testing and Bug Tracking**

&nbsp; 1. Github issues for bug tracking.

\*\*Django and FastAPI:

**What is Django ?**

Django is a python-based open-source framework to design web applications. It is a high-level web framework that is built to make the web development process faster and more efficient. Developers choose Django for it enables them to use it for the standard functionalities with a limited interference of systems, protocols, and management. Django's framework encourages rapid development and clean, pragmatic design. The agile development process of the framework aims solely on providing quality with rapidness and efficiency. Django deals with some of the basic development functions quickly like site maps, content organization, client information, and, so many more. It just focuses on finishing the application as quickly as possible.

**Key Features : Django**

1. Fast: it is insanely Fast. Without any thought, the Django working process from concept to completion is extremely fast.

2. Versatile: Django is a versatile framework that enables developers to work on different platforms varying from content management systems like WordPress, etc, to social network sites like LinkedIn, Youtube, etc, to news sites like The New York Times, CNN, etc.

3. Adaptable: Django is adaptable to different formats like JSON, HTML, XML, and many more.

4. Scalable: It is a framework that ensures scalability ( a system that allows making changes in different layers and updations without much cost and effort i.e., every layer is independent) and maintenance (the design and code are not susceptible to duplications and, hence, the code can be reused and maintained properly)

5. Secure: Django guarantees security with powerful authentication systems and protocols to avoid clickjacking, unauthorized access, cyberattacks, etc.

6. Portable: Django is a python-based framework and, therefore, portable.

**What is FastAPI ?**

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.

**Key Features : FastAPI**

1. Fast: Very high performance, on par with NodeJS and Go (thanks to Starlette and Pydantic). One of the fastest Python frameworks available.

2. Fast to code: Increase the speed to develop features by about 200% to 300%.

3. Fewer bugs: Reduce about 40% of human (developer) induced errors.

4. Intuitive: Great editor support. Completion everywhere. Less time debugging.

5. Easy: Designed to be easy to use and learn. Less time reading docs.

6. Short: Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs.

7. Robust: Get production-ready code. With automatic interactive documentation.

8. Standards-based: Based on (and fully compatible with) the open standards for APIs: OpenAPI (previously known as Swagger) and JSON Schema.

## Functional Requirements

| Page                | Functions                                                                                                                                                                                                                                                                                                                                                 | Completed by Milestone |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Homepage            | - Users are able to login or create an account <br/> - Users can request to change password if they forget it* <br/> - Access to general information <br/> - News and announcements* <br/> - FAQ page* <br/> Contact page <br/> - Can view contact information of people involved <br/> - Able to send a message and select who to direct the message to* | 2                      |
| Public              | Able to input data for the weekly challenges (i.e. exercise duration/distance, steps, blood pressure, etc.) <br/> - Can convert inputted data into graphics and display it back <br/> - Can register teams for the weekly challenges <br/> - System creates team and generates invite code to send to friends                                             | 2 & 3                  |
| Trail Ambassadors   | - Able to view calendar of scheduled events <br/> - Can create new events, update current events, or delete upcoming events <br/> - Able to view statistics <br/> - Number of people participating in the challenge <br/> - Overall progress of the challenge <br/> - Able to view and reply to messages from public directed to them\*                   | 3                      |
| Health Professional | - Able to view a list of participants in the wellness challenge <br/> - Able to view the participants’ health statistics <br/> - Able to give feedback to the participants                                                                                                                                                                                | 3                      |
| Patients            | - Able to access a list of resources and contact information <br/> - Able to send a message to health professionals <br/> - Able to submit help forms                                                                                                                                                                                                     | 3                      |

_Note: If there is a _ next to it, it is not a key feature.\*

<<<<<<< HEAD

## Testing Strategy

Throughout the project there are a vast range of tests that we need to run to run to ensure that the website is functioning how we intend it to function.

<Strong>Functionality & Usability Testing:</strong> This will ensure that the website is in its correct behavior and that it does what is intended from it to do. Moreover, this will also help us verify the behind the scenes such as the connection to the database.

<Strong>Compatibality Testing:</strong> To ensure that the website is reliable and functional, and that is runs on its intended devices such as the clients device as well as the target audience as a whole.

<Strong>Performance Testing:</strong> Performance testing are extremely important. This will ensure that the system performs well under different user stress and load.

we will have to perform stress and load tests.

=======

## Environmental Constraints

_Environmental constraints are the characteristics in the environment that change the level of difficulty of a task or activity when it is performed in that environment._

> A detailed list of environmental constraints:

**Programming Languages**

      - We have to make sure that we use programming languages that can be used across old as well as new technology, different devices.

**Maintenance Accessibility**

      - Finding qualified personnel for maintenance consultation in a timely manner will be a constraint that we have to work around. We can book the personnel on campus ahead of time for maintenance checks.

**Health Pandemic**

      - A pandemic will get health policies imposed that hinder people from attending various organized events such as the health challenges.

**Weather Fluctuations**

      - Dangerous weather conditions such as forest fires can have negative health repercussions. This encourages a low turnout to the various activities organized to fundraise other activities.

> > > > > > > 82fd769346a326f95254ddf733cd1f76cb2e6fbf
