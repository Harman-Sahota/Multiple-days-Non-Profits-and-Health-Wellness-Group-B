# Client Meeting 8 February 2023 1000

## Follow-Ups from Last Week

- REST API connection

## Agenda

- Refresher on the progress of the REST API connection.
- Progress check on the Landing page.

## Minutes

- Group C (Mitch's group) are working on connecting the tracker page back end to the front end through the REST API
  - They're wondering how it works with Reactjs because with Django, CSRF tokens were utilised, now they're not sure of how it works
- Group A (Ilya's group) is also figuring out
- We're utilising what Harman calls session tokens
  - Harman uses JSON to connect to back end database from Reactjs
  - When he gets the JSON data then he connects it to the front end using the session tokens
  - Session tokens are only in the front end
- Barbs is utilising the JSON web tokens for the tracker page
  - Barbs recommends 30 minutes for cookies to expire
  - Group C says it's recommended to make about week of cookie duration or even more
  - This is because short cookie duration expiry would make clients login frequently hence too many cookies sent to the front end and over population of requests for the server
  - Default cookie duration expiry is about a week
- Other groups are passing the user names to the database

###### Landing page

- Group A (Ilya) is planning on placing the 'Discussions' on the 'Landing page'
- Group B (us) as well as Group C (Mitch) plan on having separate pages for the Landing and Discussions / Sharing page.
  - There will be icons on the landing page leading to the Discussions page
- Group C will allow anyone that clicks the link to view the page.
- Aziz is working on the implementation of the Discussions page

## Decisions

- Project timeline constrained to August due to availability.

## Questions

> Does anyone have a concern if the JSON token expires in 30 minutes?

- Group C is not sure about how to implement that at all
