                    // Chapter No # 04 

                    // Question # 01

var name1 = "Hafiz"
var name2 = "Abdul "
var name3 = "Rafay"

console.log(name1,name2,name3)


                    // Question # 02

                        // ileegal

// var @count = illegal
// var +count = illegal
// var %count = illegal
// var &count = illegal
// var ~count = illegal

                        // legal 

// var auto_        = legal
// var auto$        = legal
// var auto_amount  = legal
// var _auto        = legal
// var auto123      = legal


                        // Question # 03

                                // A 
// document.writeln("<h1> Hello dude! </h1>")
 

                                //  B 
// $auto 
// myUserName
// _auto
// auto1

                                 //  C 
// $name
// _name
//  NAME

                                  //  D 
// Case Sensitive

                                   // E 

// Break
// Class
// Case

                                // Chapter # 04 End 


                                // Chapter # 05 
                                    //   1 
// var auto1 = 5 
// var auto2 = 3 

// var ans =( auto1 + auto2 )

// document.writeln(ans)


                                       // 2
                                     //   - 
// var auto1 = 5 
// var auto2 = 3 
// var auto3 = 8
// var auto4 = 6
// var auto5 = 9



// var ans =( auto1 - auto2 * auto3 / auto4 % auto5 )

// document.writeln(ans)
 
                                    // 3 
                                   //   1 
// a. Declare a variable
// var myVar;

// // b. Show the value of variable after declaration
// document.writeln("Value after variable : " + myVar + "<br>");

// // c. Initialize the variable with some number
// myVar = 5;

// // d. Show the initial value
// document.writeln("Initial value: " + myVar + "<br>");

// // e. Increment the variable
// myVar++;

// // f. Show the value after increment
// document.writeln("Value after increment : " + myVar + "<br>");

// // g. Add 7 to the variable
// myVar += 7;

// // h. Show the value after addition
// document.writeln("Value after addition: " + myVar + "<br>");

// // i. Decrement the variable
// myVar--;

// // j. Show the value after decrement
// document.writeln("Value after decrement : " + myVar + "<br>");

// // k. Show the remainder after dividing the variable’s value by 3
// var remainder = myVar % 3;

// // l. Output the remainder
// document.writeln("The remainder : " + remainder + "<br>");


                                            // 4 
                                     // Cost of ticket 
//  var ticket = 600;
//  var ticketWant = 5 

// var costOfTicket = (ticket * ticketWant)

// document.writeln("Price of 5 Ticket" , "=" , costOfTicket , "PKR")


                                            // 5 
                                          // Table 
// var tableNum = prompt ("Number of see table");

// document.writeln(tableNum , "x", 1, "=" , tableNum * 1, "<br>")
// document.writeln(tableNum , "x", 2, "=" , tableNum * 2, "<br>")
// document.writeln(tableNum , "x", 3, "=" , tableNum * 3, "<br>")
// document.writeln(tableNum , "x", 4, "=" , tableNum * 4, "<br>")
// document.writeln(tableNum , "x", 5, "=" , tableNum * 5, "<br>")
// document.writeln(tableNum , "x", 6, "=" , tableNum * 6, "<br>")
// document.writeln(tableNum , "x", 7, "=" , tableNum * 7, "<br>")
// document.writeln(tableNum , "x", 8, "=" , tableNum * 8, "<br>")
// document.writeln(tableNum , "x", 9, "=" , tableNum * 9, "<br>")
// document.writeln(tableNum , "x", 10, "=" , tableNum * 10, "<br>")


                                            // 6 
                                        // Tempreture 
// a
// let celsius = 30;

// // b
// let fahrenheit = (celsius * 9 / 5) + 32;
// document.writeln('${celsius}°C is ${fahrenheit}°F' , "<br>");

// // c
// let fahrenheit2 = 86;

// // d
// let celsius2 = (fahrenheit2 - 32) * 5 / 9;
// document.writeln('${fahrenheit2}°F is ${celsius2.toFixed(2)}°C' );

                                            // 7 

// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

// var priceOfItem1 = 650;
// var priceOfItem2 = 100;
// var quentityOfItem1 = 3;
// var quentityOfItem2 = 7;

// var shippingCharges = 100;

// document.writeln(
//      "Price Of Item1", " " + " " +   priceOfItem1 * quentityOfItem1 , "<br>",
//      "Price Of Item2", " " + " " + priceOfItem2 * quentityOfItem2 , "<br>",
//     " Shipping Charges" , " " + " " + shippingCharges ,  "<br>","<br>","<br>",
//     "Total Cost Of Your Order",   priceOfItem1 * quentityOfItem1 + priceOfItem2 * quentityOfItem2 + shippingCharges )



                                    // 8 


// let sub1 = "Math"
// let sub2 = "Urdu"
// let sub3 = "Islamiyat"

// let totalMarks = 100 *3;

// let firstSubObtainMark = 95;
// let secSubObtainMark = 95;
// let thirdSubObtainMark = 95;

// let totalObtainedMarks = firstSubObtainMark + secSubObtainMark + thirdSubObtainMark


// let percentage = ( totalObtainedMarks / totalMarks) * 100



// console.log( "Total Marks--> ",  totalMarks)

// console.log("Total Obtained Marks-->", totalObtainedMarks)

// console.log("Total Percentage", percentage + "%")


// document.writeln(`
//     <table border="2"  class="table-001" style="background-color: black; color: white;">
//     <th >Subject</th>
//     <th> Mark</th>
//     <th>Obtained Mark</th>
//     <th>Percentage</th>
//     <tr>
//         <td>Math </td>
//         <td>100</td>
//         <td>${firstSubObtainMark}</td>
//     </tr>
//     <tr>
//         <td>Urdu</td>
//         <td>100</td>
//         <td>${secSubObtainMark}</td>
//     </tr>
//     <tr>
//         <td>Islamiyat</td>
//                 <td>100</td>
//         <td>${thirdSubObtainMark}</td>

//     </tr>
//     <tr>
//         <td></td>
//         <td>300</td>
//         <td>${totalObtainedMarks}</td>
//         <td>${percentage}%</td>
//     </tr>
// </table>
//       `)



                                    // 9

// var Dollar = prompt("kitne chai he")
// var SR = prompt("kitne chai he")

// document.writeln( Dollar, "$", "=",  Dollar * 292, "PKR", "<br>")
// document.writeln( SR, "SR", "=",  SR * 76, "PKR", "<br>")


                                      // 10

// let num = 8;

// let result = ((num + 5) * 10) / 2;

// document.writeln("The result is:", result);

                                        //  11

// Age Calculater 

// var currentYear = 2025;

// var birthYear = prompt("enter your birth date")

// document.writeln("Your Age Is", currentYear - birthYear)

                                        //  12



// a. Store a radius into a variable
// let radius = 10; 

// b. Define the constant pi
// const pi = 3.142;

// Calculate the circumference (2 * π * r)
// let circumference = 2 * pi * radius;

// Calculate the area (π * r²)
// let area = pi * radius * radius;

// document.writeln("The circumference is " + circumference, "<br>");
// document.writeln("The area is " + area);

                                  //  13


// let favSnack = "slims"
// let currentAge = 17;
// let maximumAgeOfEatSlims = 50;
// let perDayEatSlims = 2;

// let restlife = maximumAgeOfEatSlims - currentAge;

// document.writeln((restlife * 365) * perDayEatSlims)\









