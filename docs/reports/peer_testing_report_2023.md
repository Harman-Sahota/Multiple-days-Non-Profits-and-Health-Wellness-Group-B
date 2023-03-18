# Peer Testing Report #2


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
&nbsp;	1.2 Features <br>
&nbsp;      1.3 Technology Stack  <br>
2. Peer Testing Session 	<br>
&nbsp;  2.1 Participants <br>
3. List of Usability Tasks <br>
&nbsp;   3.1 User Group: Volunteer <br>
&nbsp;   3.2 User Group: Admin <br>
4. Issues Discovered <br>
&nbsp;   4.1 Severity: High <br>
&nbsp;   4.2 Severity: Medium <br>
&nbsp;   4.3 Severity: Low <br>
5. Quantitative Scores

<br>

--- 

## Overview

Foodsaviour is a web application designed to minimize food waste by organizations by directing it to other sources rather than landfill. It also serves as an application with which organizations can generate a report for the government annually as well as share their resources among other organizations all while keeping track of this data and being able to compare it, view it as a graphic and compare the different data gathered over time. The web app aims to do  all this while maintaining safety of the data by performing user authentication and protecting the confidentiality of the data and that of the organization. 

## Features

The features presented for this user testing are as follows: 

- The user is able to successfully register an account.
- The user is able to successfully log into an existing account. 
- On the tracker page, the user is able to create records for a food type listening to how much of it was directed to what place, the user enters the amound in lbs or kgs, and the system automatically converts these values into percentages. In addition, the landfill amount is also auto-calculated.
- Once the user submits the form on the tracker page they are able to view their record in a table which gives them the option to delete that record, the user is also able to see a rough graph of the data. 
- On the profile page, the user is able to view details about their account listening to their name, email, roles, and consent. They also have the ability to edit all these details except their email. 
- On the sharing page, the user is able to browse through posts and filter by sharing or receiving posts only. They can also organize the postings by time and search for posts by typing in a search bar. 
- On the sharing page, the user is also able to create posts. 
- On the admin page, the user is able to set permissions for access to each page as well as read/write permissions which are then stored in the database. 
- The user is also able to approve or decline accounts on the admin page, these accounts show in the appropriate table.

## Peer Testing Session

|Participant|Admin|Status|Evaluation Type|Tested On|
|-----------|-----|------|---------------|---------|
|Veronica Jack|Maysey Lu|Completed|User Feedback|March 15, 2023 (In-person)|
|Harshal Patel|Maysey Lu|Completed|Think Aloud|March 17, 2023 (In-person)|
|Ben Keeley|Harman Sahota|Completed|User Feedback|March 15, 2023 (In-person)|
|Illya Yereferenko|Harman Sahota|Completed|Think Aloud|March 17, 2023 (In-person)|
|Abhiek Bist|Jordan Onwuvuche||User Feedback||
|Akshaj Srinivasan|Jordan Onwuvuche|Completed|Think Aloud|March 17, 2023 (In-person)|
|Jake Daongam|Abdulaziz Almutlaq||User Feedback|(Online)|
||Abdulaziz Almutlaq||Think Aloud|(Online)|

## List of Usability Tasks

### User Group: Volunteer

**Description:**
You are a 64 years old, retired bus driver that is not very familiar with technology and has only used a smartphone for making calls and texting. To pass time, you have decided to volunteer for ABC Farms, a local farm, which focuses on growing fresh produce such as apples, plums, and squashes. This is your first time working with them and has never heard of the Food Saviour website until now. You have been tasked to calculate how much food waste the organization has diverted from the landfill and use those results to create a report. 

**Tasks:**

1. Create an account.
2. View your profile.
3. Log out of your account.
4. Log into your account.
5. Enter data to figure out how much food waste the organization has diverted from the landfill so far.
6. Export your results.
7. Add some more data entries.
8. Download your results again.
9. Delete one or more data entries.

### User Group: Admin

**Description:**
You are the Admin of XYZ Farms which specializes in growing pumpkin, zucchini, and garlic. Your organization recently got some new volunteers and staff. Your manager has requested that you quickly approve their Food Saviour accounts so that they can start collecting the data needed to create a report that you will be presenting to the Board. You are looking to measure how much food you can save and distribute. You would also like to connect with other organizations that use the Food Saviour website.

**Tasks:**

1. Log into your account:
2. Change the access level(s) of two different roles. 
3. Approve or disapprove any pending accounts.
4. Browse through postings made by other organizations
5. Create your own posting.
6. Search for your posting.
7. Change your first and last name.
8. Deactivate your account. 
