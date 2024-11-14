# **Berlin Clock Kata**

## **Group 12 Members:**
- HAJJI Zahra
- KAPOOR Kashvi
- SHEIKH IDRIES Arwa

## **Project Description:**
The Berlin Clock Kata involves converting a given time (hh:mm:ss) into a visual representation using colored lamps. Each line of the clock represents a part of the time (seconds, minutes, hours). The project follows **Test-Driven Development (TDD)**, where each feature is implemented step by step after writing a test.

## **Clock Components Overview:**
- **Seconds Lamp**: The lamp lit for even seconds and off for odd seconds.
- **5-Hour Blocks Line**: This line represents multiples of 5 hours and contains 4 red lamps.
- **Single Hours Line**: This line represents the remaining hours (less than 5 hours) and contains 4 red lamps.
- **5-Minute Blocks Line**: This line contains 11 lamps, where each group of 3 lamps is red, and the others are yellow.
- **Single Minutes Line**: This line contains 4 yellow lamps representing the remaining minutes.




## **Example:**
Given time "19:42:02", the Berlin Clock is expected to display :

![image](https://github.com/user-attachments/assets/1f82462d-0e24-4e51-9d1d-afd70ec9edec)   


R   
R R R 0  
R R R R  
Y Y R Y Y R Y Y 0 0 0  
Y Y 0 0
