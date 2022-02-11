[Installation]

Clone the repository or download the zip file

Open the extracted folder

Open your terminal app inside the folder (CMD or Powershell)

Enter command "npm install" for the app to download required packages


[Setup]

The app can be configure with a .env file with the following entries:

NODE_ENV //Default is dev

PORT //default port 3000

NASA_API_KEY //your NASA API key, else it will be set to DEMO_API that only allows a limitted amount of calls per day

DIM // Set the dimension of the imageses return by NASA, between 1 and 0.


[RunApp]

To run the app, enter the command "npm start"

Open your browser and go to http://localhost:3000 //if you changed port then change 3000 to your assigned port

You will get the form to enter coordinates

You can get the coordinates from google maps by right clicking any locaction and then copying the values.

