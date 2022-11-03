# Client Meeting 3rd November 2022

## Follow-Ups from Last Week

- Can run virtual machine without VPN running but can not run virtual machine with VPN running.
- Have to update Barbara with different events happening throughout project - Jordan.
- Maysey converting Barbara's file about the project to a markdown file.
- Barbara has Django and MySQL installed on virtual machine though Python is yet to be installed 🥴 - I don't know how that is possible.
- **We're working on:**
  - Landing page
  - Login / Register page

## Agenda

        - Describe page content
        - Describe next week expectations

## To Do

- [ ] Sketch / Mock up the pages out.
  - Have a basic content box on various pages where users can input things.
- [ ] Write a paragraph on the tracker page.
  - Describe area of focus (food types and others)
- [ ] Have to make budgets. This will be later carried on by the warehouse manager.
  - Describe how much you're saving (financially or food amounts)

###### Harman's Additions

- [ ] write a paragraph - about tracker page
- [ ] description of what area we want to look at
- [ ] rough mockups of in system pages
- [ ] then push details
- [ ] basic box of smth on these pages
- [ ] content box
- [ ] on sharing page
- [ ] and another one that people can go in and put stuff there
- [ ] get the user accounts setup
- [ ] aka do some backend and create the database and user account table
- [ ] find some articles , find some calculators
- [ ] skim through articles
- [ ] lots of techniques
- [ ] pick a few and describe
- [ ] for ex our team will focus on produce and this how we will deal with it
- [ ] if you pick this this is what you get you save this much and it will cost you this much
- [ ] compostable phone cases pella in kelowna
- [ ] grinding and drying for kitchens

## Research

- [ ] Google search articles regarding food waste, as described in the project description and retrieve public datasets.
- [ ] Another alternative is to navigate to the [UBC Library](https://www.library.ubc.ca/)
  - Navigate to the [Indexes and Databases](https://resources.library.ubc.ca/)
  - Search 'abi proquest'
  - Check out good source results and retrieve useful information and statistics.

## Minutes

- There's always at least, a labour cost. Not everyone can be an employee.
- Have to ensure to build rich data to retain users.
- Have to help corporations find out how to minimize their waste.
- Don't dwell too much on the research articles.
- Managers will be approving budgets used for the year.
-

## Decisions

- Have to place something on the learning page such that the public can gain information.
- Decided by Gema -> We're going straight to Django pages, cutting out Figma.
- During registration
  - Collect email
  - Collect data use consent
  - Collect user roles
  - Different dashboard access for different user roles.
- We'll need a tracker page:
  - Enter the food types
  - Enter the waste types
  - Have calculations made
  - Have graph illustrations drawn
  - The metrics should include how much has been saved
    - If one has got 3000 pounds of lettuce, show how much is saved
  - Users will enter this data biannually.
- Another page containing:
  - People can use just their first name.
  - We will have a sharing / donation functionality.
    - 'Mark has this much to distribute'
  - We will also have a functionality where people can search for what they're looking for.
  - Page should describe locaation where people can do different things
    - Show where someone can send lettuce to compost
- On the admin page
  - Managers / CEOs should be able to grant approval to willing volunteers.
  - View the volunteer's calculations.
  - View the CEO's calculations.
  - Compare both CEO and volunteer calculations.
  - CEO and Volunteers must match with each other for this functionality to work.
    - Volunteer must indicate 'this is my manager'
    - CEO must indicate 'this is my volunteer'
- Users that don't consent to anything should be 'Thanked' and kicked out.
- Give users a picture of the effectiveness of their saving choices:
  - Conduct calculations that lead to relevant feedback and conclusions:
    - Oklin 24 hours grinding and drying solution gets 90% reduction, 10 tons food waste processed per year, but expensive at $23,000CDN landed Kelowna cost.

## Questions

###### Why can't we run the Virtual Machine and VPN simultaneously?

    - Barbara will review the Virtual Machine settings.
    - She can run them simultaneously.

###### How do we run code in the virtual machine?

    - Currently the programmer is sick.
    - He will setup local Virtual Machines for eachof us next week.

## Harman's Addition

- account to approve the data
- volunteer - can use calculator and can take the calculator manually to their own
- key part - get trackers (how much savings and all that , visualize and calculate to show them how its improving)
- type field in user account table and create all these types in the database
- boss can do eveything and approve other people
- setup organizations - roles in an organization
- manager approves volunteer then he can see their numbers
- give them graph
- save it year over year
- cost-benefit analysis
- add new role - staff accounts
- when we create user accounts - what info do we need - can have a field of company name but can be left null
- not within the user accounts no organization seperation
- thats a different functionality
- sharing between organizations is different page
- on landing page have smth people can see
- but for this page users must be logged in
- boss approves accounts can also add them to their organization which will help the functionality of the sharing page
  name , address if they want
- email
- role
- consent
- food types - tracker page
- waste types
- calculations options
- set of functions
- pick couple simple ones and graph it
- Fresh produce
- meat
- i have , i want
- for free
- sharing network
- i have on left
- i want on right
  mhm
- im just writing down notes
- ceo approval for volunteers but each can have their own accounts
- ceo views work of volunteers
- have approvals on admin page
- put it on a tab
- volunteer come in put their organizations and ceo can come in and say they are the rep of the organization
- then they both click and approve each other and yeah
- recover work done by volunteer and make it accessible to the admins/managers
- for consent page do you have a formal written consent doc or we do have to write it - write it ourself
- have to agree or dont let them in
- the company assumes the responsibility of the data
