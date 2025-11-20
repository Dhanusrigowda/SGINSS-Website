<table border="1" cellpadding="5">
<tr>
    <th>ID</th>
    <th>IP Address</th>
    <th>Device / Browser</th>
    <th>Visit Time</th>
</tr>

<?php 
while($row = $result->fetch_assoc()) { 
?>
<tr>
    <td><?php echo $row['id']; ?></td>
    <td><?php echo $row['ip_address']; ?></td>
    <td><?php echo $row['user_agent']; ?></td>
    <td><?php echo $row['visit_time']; ?></td>
</tr>
<?php 
}  // <-- closes while loop
?>
</table>