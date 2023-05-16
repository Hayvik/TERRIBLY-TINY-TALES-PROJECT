# TERRIBLY-TINY-TALES-PROJECT
Github Hosted Link - http://hayvik.github.io/TERRIBLY-TINY-TALES-PROJECT<br>

Dependencies -: 
              i. useState - use to manage component state
              ii.Papa- library to parse and export csv
              iii.BarChart, Bar, XAxis, YAxis, Tooltip, and Legend are components provided by the Recharts
              iv. ../src/App.css for importing css file 
Main functions :
i. fetchTextFile- Asynchronous function that fetches the text file from  URL using the Fetch API. It returns the text content of the file.
ii.parseWordFrequency- It is used to count the frequency of words and it also uses regular expression.
iii.sortWordFrequency- This function takes the array of word-frequency objects and sorts it based on the frequency value in descending order using sort and then slice used for only top 20 words.
iv. exportToCSV - It is used to export into CSV. It uses the PapaParse library's unparse function to convert the word frequency array into a CSV string and also creates a temperory link to download CSV file.
v. handleSubmit - This function is called when we click on submit button.
 **Image**

![Screenshot 2023-05-16 175604](https://github.com/Hayvik/TERRIBLY-TINY-TALES-PROJECT/assets/92513683/25c710b5-cc14-46cf-96d8-d8729689e05b)
