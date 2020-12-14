# United States Congress Search Tool

Our project uses data from Probublica's API on Congress members to help users learn about what goes on in Congress. We have created a site where users can search and filter to find information on Congress members and their activities. This project provides one easy to access location for people to learn about US Congress members.

# [Heroku App](https://inst377group18projectapp.herokuapp.com/)
# Target browser
Our project is geared towards desktop browsers, but also allows mobile users the same functionalities, as long as the user has access to a web browser.

---

# Developer Manual
<h4>How to install your application and all dependencies</h4>
<li>Clone this repository into Github Desktop using the large green Code button.</li>
<li>Open it using the "open this repository in VSCode" button within Github Desktop.</li>
<li>In VSCode, open a new terminal window by going to the Terminal option and selecting New Terminal.</li>
<li>Type npm install in that window.</li>
<h4>How to run your application on a server</h4>
<li> Change X-API key on server.js 
  <p>
  <code> 
    const headers = {
      "Content-Type": "application/json",
      "X-API-Key": "OnpCHRo4oN6GSlWRpONklKsOJv5RxiyXriiKrzJq"
    }
  </code>
  </p>
</li>
<li>Type npm start </li>
<h4>The API for server application</h4>
<li>API '/house/members' to GET list of House of Representatives members</li>
<li>API '/senate/members' to GET list of Senates members</li>
<li>API '/profile' to GET detail of each member by $memberID</li>
<li>API '/profile/comment' to GET comments on a member's profile by $memberID</li>
<li>API '/profile/comment' to POST comments on a member's profile by $memberID</li>
<li>API '/memberBills' to GET sponsored bills of each member by $memberID </li>
<h4>Road map for future development</h4>
There is much more information offered from the API to continue to develop the website. What we can add are:
  <ul>
  <li>History of bills</li>
  <li>History of votes by COngress member</li>
  <li>Status of current bills</li>
  <li>Status of cogressional proceedings</li>
  </ul>



  

