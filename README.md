# README Generator

Github; https://github.com/ronpitts90/readcaster

## Description 
This application allows programmers to, after insatlling npm, enter needed information in order to generate a read me markdown file so programmers and engineers can spend less time writing out a read me and more time coding. After answering a set of pre-installed questions a read me will generate to be attached to what ever project is being worked on. 

## Installation
In order to use this read me generator you must install npm and run node.js in your terminal. 

## Usage 
This application can be used when you are running close to a deadline and need a quick basic readme or you just dislike creating them after hours of building an apllication. Simply open your terminal after installing npm and node and type in node {'filename here'}.js and the questions will pop up. 

## User Story 
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project

## Steps
1. First I install npm
2. I create my questions for the read me to prompt and ask
3. I import generateMarkdown and fs
4. I create a function to write the readme file
5. I create a function to intialize the program by passing questions through a prompt and the results to save after
6. I call the function that starts the program
7. In generateMarkdown js I pass my data through my generateMarkdown function and console log it 
8. Then I return the data based on how I want the readme file to be setup for the user
              
