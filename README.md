# Project REST-Rant

REST-Rant is an app where users can review restaurants.


Places will have a name (string), city (string), state (string), cuisines (string) and a pic (string)



<table>
<thead>
<tr>
<th>Method</th>
<th>Path</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td><code>/</code></td>
<td>The home page</td>
</tr>
<tr>
<td>GET</td>
<td><code>/places</code></td>
<td>Index page listing all places</td>
</tr>
<tr>
<td>GET</td>
<td><code>/places/new</code></td>
<td>New form for a place</td>
</tr>
<tr>
<td>POST</td>
<td><code>/places</code></td>
<td>Create a new place</td>
</tr>
<tr>
<td>GET</td>
<td><code>/places/:id</code></td>
<td>Show one place in detail (Associated rants, new rant form, delete rant button)</td>
</tr>
<tr>
<td>GET</td>
<td><code>/places/:id/edit</code></td>
<td>Edit form for a place</td>
</tr>
<tr>
<td>PUT</td>
<td><code>/places/:id</code></td>
<td>Make changes to existing place</td>
</tr>
<tr>
<td>DELETE</td>
<td><code>/places/:id</code></td>
<td>Delete a place</td>
</tr>
<tr>
<td>POST</td>
<td><code>/places/:id/rant</code></td>
<td>Add rant to a place</td>
</tr>
<tr>
<td>DELETE</td>
<td><code>/places/:id/rant/:rantId</code></td>
<td>Delete a rant</td>
</tr>
</tbody>
</table>
<h2 dir="auto"><a id="user-content-database" class="anchor" aria-hidden="true" href="#database"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Database</h2>
<p dir="auto"><strong>places</strong></p>
<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>_id</td>
<td>Object ID</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
</tr>
<tr>
<td>city</td>
<td>String</td>
</tr>
<tr>
<td>state</td>
<td>String</td>
</tr>
<tr>
<td>cuisines</td>
<td>String</td>
</tr>
<tr>
<td>pic</td>
<td>String</td>
</tr>
</tbody>
</table>
<p dir="auto"><strong>rants</strong></p>
<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>_id</td>
<td>Object ID</td>
</tr>
<tr>
<td>place_id</td>
<td>ref(places) Object_Id</td>
</tr>
<tr>
<td>rant</td>
<td>Boolean</td>
</tr>
<tr>
<td>rating</td>
<td>Number</td>
</tr>
<tr>
<td>comment</td>
<td>String</td>
</tr>
<tr>
<td>reviewer</td>
<td>String</td>
</tr>
</tbody>
</table>