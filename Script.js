//alert("Hello! Welcome to my Christmas Letter Project. Hope you enjoy -Brother Markitos :)")

function getValues() {
    var selectedSchool = '';
    var schooling = document.getElementsByName('school');
    for (i = 0; i < schooling.length; i++) {
        if (schooling[i].checked) {
            selectedSchool = schooling[i].value;
            console.log("School: " + schooling[i].value);
        }
    }
    var schoolGrade = '';
    if (selectedSchool == "Middle School") {
        schoolGrade = "Middle  School  is  pretty  cool  tho, and  I  hope  you've  enjoyed  it  so  far  and  have  made  good  memories!  Remember  that  at  all  moments  God  is  with  you! ";
    }
    else if (selectedSchool == "High School") {
        schoolGrade = "High  School  is  definitely  a  fun  experience.  Always  enjoy  it  and  remember  to  ask  God  for  guidance  and  wisdom  as  you're  about  to  enter  into  the  real  world  after  graduation  and  choosing  a  good  college  is  a  bit  tough  or  simply  deciding  what  you  will  be  doing  after,  but  in  Jesus'  Name  you  got  this! :)";
    }
    else if (selectedSchool == "College") {
        schoolGrade = "College  may  not  be  easy  but  God  is  with  you!  unless  you're  smart  like  me,  then  school  is  easy. FR  FR  I  am  pretty  smart!  but  you're  smart  too :) I  think,  idk  but  if  not  ask  the  Lord  for  wisdom  and  He  will  instruct you   and  give  you   creativity  and  will  give  you  the  smarts  to  achieve  success  in  your  classes! Never  forget  that  the  Lord  is  always  with  you!  Can  I  get  an  Amen?";
    }
    else if (selectedSchool == "Life") { 
        schoolGrade = "You  may  not  be  in  school  anymore  but  Life  is  also  crazy  nowadays. I  pray  that  God  may  show  you  grace  in  all  your  upcoming  ventures  in  Jesus' Name,  and  that  you  may  be  blessed  and  highly  favored  to  be  a  great  testimony  of  God's  faithfulness  towards  His  people! "
    }
    else if (selectedSchool == "Both work and college") {
        schoolGrade = "SHEEESH!  Both  college  and  work?  You  live  life  on  the  edge  huh!  you're  a  gangster  in  my  eyes  for  sure.  May  God  give  you  widsom,  patience  and  endurance  to  finish  your  college  and  finally  get  your  degree!  Remember,  you  can  do  all  things  through  Christ  who  gives  you  strength!  "
    }

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var age = parseInt(document.getElementById('age').value);
    var ifAge;
    if (document.getElementById('age').value < 21) {
        ifAge = " I  pray  that  you  may  enjoy  your  youth  &  create  very  amazing  and  lasting  memories, and  I  hope  that  you  have  had  a  very  amazing  and  memorable  experience  here  in  sector  4. We  really  appreciate  you  and  are  constantly  praying  for  you :)"
    }
    else if (document.getElementById('age').value > 21) {
        ifAge = "May God prosper you and show you favor in your adulthood in Jesus' Name! n just because you're over 21 doesn't mean you can get buck wild at the casino LOL. ";
    }
    else if (document.getElementById('age').value = 21) {
        ifAge = "Enjoy  being  21.  It  only  lasts  1  year,  but  thank  God  you've  made  it  this  far! "
    }

    var goals = document.getElementById('goals').value;
    console.log("Goals: " + goals)

    var church = document.getElementById('church').value;

    var textResult = document.getElementById('result').innerHTML;

    console.log(ifAge);




    //RESPONSES

    //AMY
    if (document.getElementById('firstName').value == 'Amy' && document.getElementById('lastName').value =='Calvo' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support and I thank you for the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your effort! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 









    //DANIELA
    else if(document.getElementById('firstName').value == 'Daniela' && document.getElementById('lastName').value =='Calvo' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support and I thank you for the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your effort! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 










    //EDDIE
    else  if(document.getElementById('firstName').value === 'Edward' || 'Eddie' && document.getElementById('lastName').value ==='Vargas' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support and I thank you for the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your effort! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 







    //ANDREW
    else if(document.getElementById('firstName').value == 'Andrew' && document.getElementById('lastName').value =='Pena' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths last year and gotten closer this year. It has been a very fun year and I'm thankful that we've been able to get to work together. I appreciate all of your help and guidance! I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in the sector and in the events. You have been such a great support and I thank you for the effort you have put into helping us out during our sector services and events. I truly appreciate you bro and I pray that God may bless you for all of your effort! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 








    //JACKY
    else if(document.getElementById('firstName').value == 'Jacky' || 'Jacqueline' && document.getElementById('lastName').value =='Pena' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to work together and gotten closer. It has been a very fun and blessed year . I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year with the sector. You have been such a great support and I thank you for the effort you have put into helping us out during our sector events. I truly appreciate you and I pray that God may bless you for all of your effort! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    }
    
    






    //GABRIEL
    else if(document.getElementById('firstName').value == 'Gabriel' && document.getElementById('lastName').value =='Diaz' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events.  Thank you for the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your effort! I'm praying for you bro! Don't lose your passion for Christ. " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 







    //CHRISTIAN DIAZ
    else if(document.getElementById('firstName').value == 'Christian' && document.getElementById('lastName').value =='Diaz' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths this year and gotten closer. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events.  Thank you for the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your effort! I'm praying for you bro! Don't lose your passion for Christ. " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 







    //JOSHUA FRANCO
    else if(document.getElementById('firstName').value == 'Joshua' || 'Josh' && document.getElementById('lastName').value =='Franco' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths this year and gotten closer. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support and I thank you for the effort you have put into helping us out during our sector services. I truly appreciate you and all that you have done for us, and I pray that God may bless you for all of your effort! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 








    //MAO
    else if(document.getElementById('firstName').value == 'Mao' && document.getElementById('lastName').value =='Zambrano' )
    {
        document.getElementById('result').innerHTML = " Hola " + firstName +
        " Le agradezco a Dios que nos hallamos acercado este ano. Ha estado la cosa muy chido y le doy gracias a Dios que podimos trabajar juntos en los eventos del sector . Le pido a Dios que to siga usando en " + church+ "  y que te prospere en " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" se logren.  " + ifAge + " Te quiero agradecer por todo todo tu trbajo y esfuerzo en ayudarnos en las actividades del sector. Has sido un gran apoyo para nosotros y para los jovenes. Que Dios te bendiga bro! I love you " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 








    //JULIO
    else if(document.getElementById('firstName').value == 'Julio' && document.getElementById('lastName').value =='Zambrano' )
    {
        document.getElementById('result').innerHTML = " Hola " + firstName +
        " Le agradezco a Dios que nos hallamos acercado este ano. Ha estado la cosa muy chido y le doy gracias a Dios que podimos trabajar juntos en los eventos del sector . Le pido a Dios que to siga usando en " + church+ "  y que te prospere en " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" se logren.  " + ifAge + " Te quiero agradecer por todo todo tu trbajo y esfuerzo en ayudarnos en las actividades del sector. Has sido un gran apoyo para nosotros y para los jovenes. Que Dios te bendiga bro! I love you " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 








    //LUIS GIOVANNY
     else if(document.getElementById('firstName').value == 'Luis' || 'Jovany' && document.getElementById('lastName').value =='Garcia' )
     {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths this year and gotten closer. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support for us and I thank you for all the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice! God has something great in store for you! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    }  







    //MOSES
     else if(document.getElementById('firstName').value == 'Moses' && document.getElementById('lastName').value =='Martinez' )
     {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths this year and gotten closer. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support for us and I thank you for all the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice! God has something great in store for you! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    }  







    //LIZETH
    else if(document.getElementById('firstName').value == 'Lizeth' && document.getElementById('lastName').value =='Ibarra' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths this year and gotten closer. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support for us and I thank you for all the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice! God has something great in store for you! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    }  








    //LESLIE
    else if(document.getElementById('firstName').value == 'Leslie' && document.getElementById('lastName').value =='Ibarra' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer this year. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " You have been a very effective and amazing youth leader and Hesperia could not be more blessed :) I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support for us and I thank you for all the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice!" + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    }  








    //ANTHONY
    else if(document.getElementById('firstName').value == 'Anthony' && document.getElementById('lastName').value =='Franco' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer this year. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " You have been a very effective and amazing youth leader; your efforts are not in vain :) I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support for us and I thank you for all the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice!" + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    }   








    //GENESIS VARGAS
    else if(document.getElementById('firstName').value == 'Gen' || "Genesis" && document.getElementById('lastName').value =='Vargas' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths last year and gotten closer this year. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  I know Prepatories University isn't easy. " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector. You have been such a great support and I thank you for all the effort you have put into helping us out during our consecration week service. I truly appreciate you and I pray that God may bless you for all of your sacrifice! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 







    //GENESIS TIRADO
    else if(document.getElementById('firstName').value == 'Genesis' && document.getElementById('lastName').value =='Tirado' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support and I thank you for the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :) <br>  Also, Happy Early Birthday!";
     
    } 






     //GLADYS
     else  if(document.getElementById('firstName').value == 'Gladys' && document.getElementById('lastName').value =='Delgado' )
     {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer this year. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " You have been a very effective and amazing youth leader and Barstow could not be more blessed :) I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support for us and I thank you for all the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice!" + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    }  





     //SYDNEY
     else  if(document.getElementById('firstName').value == 'Sydney' && document.getElementById('lastName').value =='Delgado' )
     {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer this year. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events. You have an annointed voice Cici, and I urge you to keep dedicated to the Lord in prayer and fasting. You have been such a great support and I thank you for the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 








     //HIZAK
     else if(document.getElementById('firstName').value == 'Hizak' && document.getElementById('lastName').value =='Hernandez' )
     {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer this year. It has been a very fun year and I'm thankful that we've been able to get to work together other. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support and I thank you for the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice! " + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    } 






     //JULIA
     else  if(document.getElementById('firstName').value == 'Julia' && document.getElementById('lastName').value =='Rivera' )
     {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and have gotten closer this year. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " You have been a very effective and amazing youth leader and California City church could not be more blessed :) I also just want to thank you specifally for helping us out this year in our sector events. You have been such a great support for us and I thank you for all the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice!" + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    }   







    //JENNIFER
    else if(document.getElementById('firstName').value == 'Jennifer' && document.getElementById('lastName').value =='Espindola' )
    {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and have gotten closer this year. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I just want to say thank you specifally for helping us out this year in our sector events. You have been  a blessing to the sector and I thank you for all the effort you have put into helping us out during our sector services. I truly appreciate you and I pray that God may bless you for all of your sacrifice!" + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     
    }   





     //KEVIN
     else if(document.getElementById('firstName').value == 'Kevin' && document.getElementById('lastName').value =='Ortiz' )
     {
        document.getElementById('result').innerHTML = " Hey " + firstName +
        " Im glad the Lord has allowed us to cross paths and gotten closer this year. It has been a very fun year and I'm thankful that we've been able to get to work together. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I just want to thank you specifally for helping us out this year in our sector. Thank you for all the effort you have put into helping us out in the sector this year. I truly appreciate you and I pray that God may bless you for all of your sacrifice!" + "-From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
     }


     //LEANNAH
     else if(document.getElementById('firstName').value == 'Leannah' && document.getElementById('lastName').value =='Jackson' )
     {
        document.getElementById('result').innerHTML = " Hey Beautiful :) " +
        " Im  glad  the  Lord has  allowed us to cross paths in the manner that He allowed it to happen and for allowing me to have gotten closer to you this year even if it was towards the end. Meeting you has been the most amazing story I have been able to tell, and getting to know you and get close to you has been the greatest adventure I have ever had. I pray that God may use you in " + church+ "  and that He may prosper you in your journey through " + selectedSchool +
        ".  " + schoolGrade + ". "  + ". I also pray that your goals to \""+ goals +  "\" may come to pass.  " + ifAge + " I also just want to thank you specifally for allowing me to be myself with you and for allowing us to share the most amazing and funniest moments I've ever had. You have been such a great support in my life and I thank you for being you. You are the most astonishing and breathtaking women of God I have ever met in my life. I want to explore the world and watch movies with you but more importantly I want to pray late nights with you and seek the presence of the Lord hand in hand with you. I truly appreciate you and I pray that God will bless us and allow us to grow together and take us very far. I love you! " + " <br> -From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS!";
     
    } 




    //GENERAL RESPONSE
     else {
        document.getElementById('result').innerHTML = " Hey " + firstName +
     " Im  glad  the  Lord has  allowed  us  to  cross  paths  this  year.  It  has  been  a  very  fun  and  amazing  year  and  I'm  thankful  that  we've  been  able  to  get  to  know  each  other : ) I  pray  that  God  may  use  you  in " + church+  "  and  that  He may  prosper  you  in  your  journey  through  " + selectedSchool +
     ".  " + schoolGrade + ". "  + ". I  also  pray  that  your  goals  to \""+ goals +  "\" may  come  to  pass.  " + ifAge + " <br> -From Brother Markitos, To " + firstName +" " + lastName + ", <br> MERRY CHRISTMAS :)";
  
     }




    
   
}





