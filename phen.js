 var firstname = "Stephen";
 var lastname = "Idam";
 var fullname = firstname + " " + lastname;
   let MathScore = 70;
   let EnglishScore = 69;
   let ScienceScore = 75;
     let TotalScore = MathScore + EnglishScore + ScienceScore;
      let AverageScore = TotalScore/3;
      
      console.log(fullname)
      console.log("Math score is " + " " + MathScore)
      console.log("English Score is " + " " + EnglishScore)
      console.log( "Science Score is " + " " + ScienceScore)
      console.log("Total Score is " + " " + TotalScore)
      console.log( "Average Score is " + " " +  AverageScore);
        if(AverageScore>=70){
          console.log("Excellent")
        }
        else if(AverageScore>=50){
          console.log("Good")
        } 
        else if(AverageScore>=35){
          console.log("You Can Do Better")
        }
        else{
          console.log("Fail")
        }

