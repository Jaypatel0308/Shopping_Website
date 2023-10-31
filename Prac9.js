function validateRegisterForm() 
{
	var name=document.getElementById("name").value;
	if(name=="") 
	{
		document.getElementById("NameWarning").innerHTML="Note: **Empty Name not allowed";
		return false;
	}
	else 
	{
		var i;
		for(i in name)
		{
			if((name[i]>='a' && name[i]<='z') || (name[i] >='A' && name[i]<='Z') || name[i]==' ')
			{
				document.getElementById("NameWarning").innerHTML="";
			}
			else
			{
				document.getElementById("NameWarning").innerHTML="Note: **Name accepts only alphabets";
				return false;
			}
		}
	}
	
	var email=document.getElementById("mail").value;
	var mail="";
	var value=0;
	for(i=0; i<8; i++) 
	{
		if(i!=2 && i!=3 && i!=4)
		{
			if(email[i]>='0' && email[i]<='9')
			{
				mail+=email[i];
			}
			else						
			{
				document.getElementById("MailWarning").innerHTML="Note: **Invalid Nirma University E-mail id";
				return false;		
			}
		}
		else
		{
			if(email[i]>='a' && email[i]<='z')
			{			
				mail+=email[i];
			}					
			else
			{
				document.getElementById("MailWarning").innerHTML="Note: **Invalid Nirma University E-mail id";
				return false;	
			}
		}			
	}	
	if(email!= mail+"@nirmauni.ac.in")
	{
		document.getElementById("MailWarning").innerHTML="Note: **Invalid Nirma University E-mail id";
		return false;
	}
	if(email==mail+"@nirmauni.ac.in")
	{
		document.getElementById("MailWarning").innerHTML="";
	}
	
	var pass=document.getElementById("pwd").value;
	var repass=document.getElementById("conpwd").value;
	if(pass.length<8)
	{
		document.getElementById("PWDWarning").innerHTML="Note: **Password should contain minimum 8 characters";
		return false;
	}
	else
	{
		var a=b=c=0;
		for(i in pass)
		{
			if(pass[i]>='a' && pass[i]<='z')
			{
				a=1;
			}
			else if(pass[i]>='A' && pass[i]<='Z')
			{
				b=1;
			}
			else if(pass[i]>='0' && pass[i]<='9')
			{
				c=1;
			}
		}
		if(a!=1 || b!=1 || c!=1)
		{
			document.getElementById("PWDWarning").innerHTML="Note: **Password should contain uppercase, lowercase and digit";
			return false;
		}
		else
		{
			document.getElementById("PWDWarning").innerHTML="";
		}
		if(repass!=pass)
		{
			document.getElementById("ConPWDWarning").innerHTML="Note: **Re-Password doesn't match with original Password";
			return false;
		}
		if(repass==pass)
		{
			document.getElementById("PWDWarning").innerHTML="";
			document.getElementById("ConPWDWarning").innerHTML="";
		}
		
		var LoginForm=document.getElementById("LoginForm");
		var RegForm=document.getElementById("RegForm");
		var Indicator=document.getElementById("Indicator");
		RegForm.style.transform="translateX(300px)";
		LoginForm.style.transform="translateX(300px)";
		Indicator.style.transform="translateX(0px)";
		return false;
	}
}

function validateLoginForm()
{
	var email=document.getElementById("loginmail").value;
	var mail="";
	var value=0;
	for(i=0; i<8; i++) 
	{
		if(i!=2 && i!=3 && i!=4)
		{
			if(email[i]>='0' && email[i]<='9')
			{
				mail+=email[i];
			}
			else						
			{
				document.getElementById("LoginMailWarning").innerHTML="Note: **Invalid Nirma University E-mail id";
				return false;		
			}
		}
		else
		{
			if(email[i]>='a' && email[i]<='z')
			{			
				mail+=email[i];
			}					
			else
			{
				document.getElementById("LoginMailWarning").innerHTML="Note: **Invalid Nirma University E-mail id";
				return false;	
			}
		}	
	}
	if(email!=/*mail+"@nirmauni.ac.in"*/document.getElementById("mail").value)
	{
		document.getElementById("LoginMailWarning").innerHTML="Note: **Invalid E-mail id";
		return false;
	}
	else
	{
		document.getElementById("LoginMailWarning").innerHTML="";
	}
	
	var pass=document.getElementById("loginpwd").value;
	if(pass.length<8)
	{
		document.getElementById("LoginPWDWarning").innerHTML="Note: **Password should contain minimum 8 characters";
		return false;		
	}
	else
	{
		var a=b=c=0;
		for(i in pass)
		{
			if(pass[i]>='a' && pass[i]<='z')
			{
				a=1;
			}
			else if(pass[i]>='A' && pass[i]<='Z')
			{
				b=1;
			}
			else if(pass[i]>='0' && pass[i]<='9')
			{
				c=1;
			}
		}
		if(a!=1 || b!=1 || c!=1)
		{
			document.getElementById("LoginPWDWarning").innerHTML="Note: **Password should contain uppercase, lowercase and digit";
			return false;
		}
		if(pass!=document.getElementById("pwd").value)
		{
			document.getElementById("LoginPWDWarning").innerHTML="Note: **Incorrect Password ";
			return false;
		}
		else
		{
			document.getElementById("LoginPWDWarning").innerHTML="";			
		}
	}
}