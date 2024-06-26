<script language="JavaScript">
function prompts(form) 
  opener.userid = form.userid.value;
  opener.password = form.password.value;
  opener.done();
  self.close();
  return false;


function cancel() 
 self.close();
  return false;

</script>