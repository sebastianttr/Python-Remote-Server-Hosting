import tkinter as tk
from tkinter.ttk import *
import tkinter.font as font
import tkinter.scrolledtext as tkst
import subprocess
from http.server import HTTPServer, BaseHTTPRequestHandler
import socketserver
from io import BytesIO
import threading
import requests
import os
import signal
import codecs
import subprocess
import json
import urllib.parse
from urllib.parse import parse_qsl, parse_qs
from datetime import datetime
# run command:
# python -m app.py --cgi 8001


class Application(tk.Frame):

    logcat = "Logcat test"

    def __init__(self, master=None):
        super().__init__(master)
        self.master = master
        self.pack(fill="both", expand=1)
        self.start = tk.Button(self)
        self.stop = tk.Button(self)
        self.updateBtn = tk.Button(self)
        self.logInput = tk.Entry(self)
        self.logSend = tk.Button(self)
        self.logCanvas = tk.Canvas(self)
        self.logCanvas = tk.Canvas(self)
        self.create_widgets()

    def create_widgets(self):

        self.start["text"] = "Server Start"
        self.start["fg"] = "green"
        self.start["command"] = self.startServer
        self.start["width"] = 20
        self.start["height"] = 2
        self.start["font"] = font.Font(size=10)
        self.start.place(x=2, y=4)

        self.stop["text"] = "Server Stop"
        self.stop['fg'] = "red"
        self.stop['command'] = self.stopServer
        self.stop["width"] = 20
        self.stop["height"] = 2
        self.stop["font"] = font.Font(size=10)
        self.stop.place(x=2, y=50)

        self.updateBtn["text"] = "Server Update"
        self.updateBtn['fg'] = "black"
        self.updateBtn['command'] = self.updateServer
        self.updateBtn["width"] = 20
        self.updateBtn["height"] = 2
        self.updateBtn["font"] = font.Font(size=10)
        self.updateBtn.place(x=2, y=95)

        self.logInput["width"] = 45
        self.logInput.place(x=175, y=420)

        self.logSend["text"] = "Send"
        self.logSend["command"] = self.sendLog
        self.logSend["width"] = 5
        self.logSend["font"] = font.Font(size=7)
        self.logSend.place(x=450, y=420)

        self.frame1 = tk.Frame(
            master=self,
            bg='black',
            width=0,
            height=0
        )
        self.frame1.place(x=175, y=5)

        self.editArea = tkst.ScrolledText(
            master=self.frame1,
            wrap=tk.WORD,
            bg='black',
            fg='white',
            width=37,
            height=25
        )
        self.editArea.pack(fill=tk.BOTH, expand=True)
        self.editArea.insert(tk.INSERT, "Programm Start.")
        # Adding some text, to see if scroll is working as we expect it

        self.quit = tk.Button(self, text="QUIT", fg="red", width=20, height=2,
                              command=self.master.destroy)
        self.quit.pack(side="bottom", pady=10)

    # button clicks

    def say_hi(self):
        print("hi there, everyone!")

    def startServer(self):
        self.editArea.insert(
            tk.INSERT, "\nStarting HTTP server: localhost:8000")
        print("Starting HTTP server: localhost:8000")

        jsonFile = open("thingsaves.json", "r")
        req = requests.post(
            "http://iotdev.htlwy.ac.at/thing/iotusecases2020/setCloudscript", data=jsonFile.read())

        self.httpd = socketserver.TCPServer(
            ("192.168.0.159", 8000),  SimpleHTTPRequestHandler)
        self.serverThread = threading.Thread(target=self.serveInThread)
        self.serverThread.daemon = True
        self.serverThread.start()

        pr = Process()
        pr.startAllProcesses()

    def stopServer(self):
        self.editArea.insert(tk.INSERT, "\nStoping Server...")
        # self.editArea.insert(tk.INSERT, "\nStoping Server.")
        print("Stopping server")
        self.serverThread = None

    def updateServer(self):
        jsonFile = open("thingsaves.json", "r")
        req = requests.post(
            "http://iotdev.htlwy.ac.at/thing/iotusecases2020/setCloudscript", data=jsonFile.read())

    def printCon(self, data):
        self.editArea.insert(tk.INSERT, str(data))
        print(str(data))

    def serveInThread(self):
        while True:
            self.httpd.handle_request()

    def sendLog(self):
        # print("Sending Command: " + str(self.logInput.get()))
        # self.editArea.insert(tk.INSERT, "\n>" +
        # str(self.logInput.get()) + "\n")
        self.logInput.delete(0, 'end')


class Process:

    runningProcesses = []

    def restartProcess(self, process):
        jsonFile = open("thingsaves.json", "r")
        savesAsJson = json.loads(jsonFile.read())
        jsonFile.close()
        for i, items in enumerate(self.runningProcesses):
            if(items['name'] == process):
                print('>Killing Process: ' + str(items['processID']))
                try:
                    os.kill(items['processID'], signal.SIGBREAK)
                    pass
                except Exception:
                    pass

                filePortSet = open(
                    savesAsJson['cloudscripts'][i]['info']['filename'], "r")
                scriptPatched = filePortSet.read().replace(
                    "DEF_PORT", str(items['port']))
                filePortSet.close()
                fileSet = codecs.open(
                    savesAsJson['cloudscripts'][i]['info']['filename'], "w", "utf-8")
                fileSet.write(scriptPatched)
                fileSet.close()

                processCMD = ""
                if (savesAsJson['cloudscripts'][i]['info']['language'] == 'javascript'):
                    processCMD = 'node '

                elif (savesAsJson['cloudscripts'][i]['info']['language'] == 'python'):
                    processCMD = 'python '

                process1 = subprocess.Popen([processCMD,  savesAsJson['cloudscripts'][i]['info']['filename']],
                                            stdout=subprocess.PIPE,
                                            stderr=None,
                                            universal_newlines=True)
                self.runningProcesses[i]["processID"] = process1.pid

                print("Running subprocesses: " + str(self.runningProcesses))

    def startAllProcesses(self):
        jsonFile = open("thingsaves.json", "r")
        savesAsJson = json.loads(jsonFile.read())
        jsonFile.close()
        for i, itemThings in enumerate(savesAsJson["cloudscripts"]):
            # print(itemThings['info']['filename'])
            filePortSet = open(itemThings['info']['filename'], "r")
            scriptPatched = filePortSet.read().replace("DEF_PORT", str(8001+i))
            filePortSet.close()
            fileSet = codecs.open(itemThings['info']['filename'], "w", "utf-8")
            fileSet.write(scriptPatched)
            fileSet.close()

            if(itemThings['info']['language'] == 'javascript'):
                process1 = subprocess.Popen(['node ',  itemThings['info']['filename']],
                                            stdout=subprocess.PIPE,
                                            stderr=None,
                                            universal_newlines=True)
            elif (itemThings['info']['language'] == 'python'):
                process1 = subprocess.Popen(['python ',  itemThings['info']['filename']],
                                            stdout=subprocess.PIPE,
                                            stderr=None,
                                            universal_newlines=True)
            self.runningProcesses.append(
                {'ID': i, 'processID': process1.pid, 'name': itemThings['info']['name'], 'port': 8001+i})

            process_running = True
            print("Running subprocesses: " + str(self.runningProcesses))

    def startProcess(self, process):
        print("Starting new Process!")
        jsonFile = open("thingsaves.json", "r")
        savesAsJson = json.loads(jsonFile.read())
        jsonFile.close()
        for i, items in enumerate(savesAsJson["cloudscripts"]):
            if(items['info']['name'] == process):
                filePortSet = open(
                    savesAsJson['cloudscripts'][i]['info']['filename'], "r")
                scriptPatched = filePortSet.read().replace(
                    "DEF_PORT", str(8001+i))
                filePortSet.close()
                fileSet = codecs.open(
                    savesAsJson['cloudscripts'][i]['info']['filename'], "w", "utf-8")
                fileSet.write(scriptPatched)
                fileSet.close()

                processCMD = ""
                if (savesAsJson['cloudscripts'][i]['info']['language'] == 'javascript'):
                    processCMD = 'node '

                elif (savesAsJson['cloudscripts'][i]['info']['language'] == 'python'):
                    processCMD = 'python '

                process1 = subprocess.Popen([processCMD,  savesAsJson['cloudscripts'][i]['info']['filename']],
                                            stdout=subprocess.PIPE,
                                            stderr=None,
                                            universal_newlines=True)
                self.runningProcesses.append(
                    {'ID': i, 'processID': process1.pid, 'name': items['info']['name'], 'port': 8001+i})
                print("Running subprocesses: " + str(self.runningProcesses))


class StorageHandler():
    savesAsJson = None

    def __init__(self):
        super().__init__()
        jsonFile = open("thingsaves.json", "r")
        self.savesAsJson = json.loads(jsonFile.read())
        jsonFile.close()

    def getFilenameByName(self, name):
        for i, itemThings in enumerate(self.savesAsJson["cloudscripts"]):
            # print(itemThings)
            if (itemThings['info']['name'] == name):
                return itemThings['info']['filename']

    def getLanguageByName(self, name):
        for i, itemThings in enumerate(self.savesAsJson["cloudscripts"]):
            # print(itemThings)
            if (itemThings['info']['name'] == name):
                return itemThings['info']['language']

    def getCloudscriptByName(self, name):
        for i, itemThings in enumerate(self.savesAsJson["cloudscripts"]):
            # print(itemThings)
            if (itemThings['info']['name'] == name):
                return itemThings

    def getIndexByName(self, name):
        for i, itemThings in enumerate(self.savesAsJson["cloudscripts"]):
            # print(itemThings)
            if (itemThings['info']['name'] == name):
                return i


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    pr = Process()
    fs = StorageHandler()

    def do_GET(self):
        jsonFile = open("thingsaves.json", "r")
        savesAsJson = json.loads(jsonFile.read())
        jsonFile.close()
        print("Request from \"" +
              str(self.headers["Referer"]) + "\" with path " + str(self.path))
        path1 = str(self.path)
        print(str(self.path))
        if (path1.startswith("/create")):
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            # http://192.168.0.159:8000/create?name="thing1"&lang="javascript"
            query = parse_qs(path1[8:])
            name = str(query['name']).replace("['\"", "").replace("\"']", "")
            title = str(query['title']).replace("['\"", "").replace("\"']", "")
            lang = str(query['lang']).replace("['\"", "").replace("\"']", "")
            desc = str(query['desc']).replace("['\"", "").replace("\"']", "")
            user = str(query['user']).replace("['\"", "").replace("\"']", "")
            response = BytesIO()
            response.write(b"creating new thing ")
            self.wfile.write(response.getvalue())

            thingSaves = codecs.open("thingsaves.json", "r", "utf-8")
            jsonThingSaves = thingSaves.read()
            thingSaves.close()

            arraySize = 1
            try:
                arraySize = len(json.loads(jsonThingSaves)["cloudscripts"]) + 1
            except Exception:
                pass

            newThingJson = {
                "thingID": arraySize,
                "info": {
                    "title": title,
                    "name": name,
                    "description": desc,
                    "language": lang,
                    "user": user,
                    "filename": name + (".js" if lang == "javascript" else ".py")
                }
            }
            if (len(jsonThingSaves) > 0):
                jsonParsed = json.dumps(newThingJson)
                print("JSON parsed: ", jsonParsed)
                data = json.loads(jsonThingSaves)["cloudscripts"]
                data1 = ""
                if (len(data) == 1):
                    data1 = json.loads(json.dumps(str(data[:len(data)]).replace(
                        "[", "").replace("]", ""))) + ","
                else:
                    data1 = ""
                jsonSaves = "{\"cloudscripts\":[" + \
                    data1 + json.dumps(newThingJson) + "]}"
                codecs.open("thingsaves.json", "w").close()
                f = codecs.open("thingsaves.json", "w")
                f.write(jsonSaves.replace("\'", "\""))
                f.close()
            else:
                open("thingsaves.json", "w").close()
                jsonSave = {"cloudscripts": [newThingJson]}
                f = open("thingsaves.json", "w",)
                f.write(json.dumps(jsonSave))
                f.close()

            jsonFile = open("thingsaves.json", "r")
            req = requests.post(
                "http://iotdev.htlwy.ac.at/thing/iotusecases2020/setCloudscript", data=jsonFile.read())

            if (lang == "javascript"):
                newThing = open(name + ".js", "w")
                newThing.write(
                    "var express=require(\'express\')\nvar app=express()\n\napp.get(\'/" + name + "\', (req, res)=> {\n    res.send(\'Hello World!\')\n    console.log(\"Hello\")\n})\n\n//leave this untouched! \napp.listen(DEF_PORT)")
                newThing.close()
                self.pr.startProcess(name)
            elif (lang == "python"):
                newThing = open(name + ".py", "w")
                newThing.write("from http.server import BaseHTTPRequestHandler, HTTPServer\n"
                               "from io import BytesIO\n\n"
                               "PORT = DEF_PORT\n\n"
                               "class ServerHandler(BaseHTTPRequestHandler):\n"
                               "    def do_GET(self):\n"
                               "       self.send_response(200)\n"
                               "       # Headers for security measures\n"
                               "       self.send_header(\"Content-type\", \"text/plain\")\n"
                               "       self.send_header('Access-Control-Allow-Credentials', 'true')\n"
                               "       self.send_header('Access-Control-Allow-Origin',str(self.headers[\"Origin\"]))\n"
                               "       self.end_headers()\n"
                               "       path = str(self.path)\n"
                               "       if(path.startswith(\"/" +
                               name + "\")):\n"
                               "          res = BytesIO()\n"
                               "          res.write(b'Hello world from Thing 1!')\n"
                               "          self.wfile.write(res.getvalue())\n\n"
                               "#DON'T TOUCH THIS PART\n"
                               "server = HTTPServer(('localhost', PORT), ServerHandler)\n"
                               "server.serve_forever()\n")
                newThing.close()

        elif (path1.startswith("/delete")):
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            response = BytesIO()
            response.write(b"Deleting specified thing.")
            self.wfile.write(response.getvalue())

            query = parse_qs(path1[8:])
            name = str(query['name']).replace("['\"", "").replace("\"']", "")

            os.remove(self.fs.getFilenameByName(name))
            del (savesAsJson['cloudscripts'][self.fs.getIndexByName(name)])

            print("Reprinting again: ")
            for i, itemThings in enumerate(savesAsJson["cloudscripts"]):
                itemThings["thingID"] -= 1 if itemThings["thingID"] != 0 else 0
                print(itemThings)

            open("thingsaves.json", "w").close()
            writeFile = open("thingsaves.json", "w")
            writeFile.write(json.dumps(savesAsJson))
            writeFile.close()

            jsonFile = open("thingsaves.json", "r")
            req = requests.post(
                "http://iotdev.htlwy.ac.at/thing/iotusecases2020/setCloudscript", data=jsonFile.read())

        elif (path1.startswith("/get")):
            self.send_response(200)
            self.send_header("Content-type", "text/plain")
            self.send_header('Access-Control-Allow-Credentials', 'true')
            self.send_header('Access-Control-Allow-Origin',
                             str(self.headers["Origin"]))
            self.end_headers()
            query = parse_qs(path1[5:])
            name = str(query['name']).replace("['\"", "").replace("\"']", "")

            response = ""
            for i, itemThings in enumerate(savesAsJson["cloudscripts"]):
                if (itemThings["info"]["name"] == name):
                    scriptFile = open(itemThings["info"]["filename"], "r")
                    response = scriptFile.read()
                    if (itemThings["info"]["language"] == "javascript"):
                        response = response[0: (response.index(
                            'listen(')+7)] + "DEF_PORT);"
                        scriptFile.close()
                    elif(itemThings["info"]["language"] == "python"):
                        response = response[0: (
                            response.index('PORT =')+6)] + " DEF_PORT \n\n" + response[response.index('PORT =')+13:]
                        scriptFile.close()

            res = BytesIO()
            res.write(str.encode(response))
            self.wfile.write(res.getvalue())

        else:
            jsonFile = open("thingsaves.json", "r")
            savesAsJson = json.loads(jsonFile.read())
            jsonFile.close()

            for i, item in enumerate(savesAsJson['cloudscripts']):
                if (self.path[1:].startswith(item['info']['name'])):
                    self.send_response(200)
                    self.send_header("Content-type", "text/html")
                    self.end_headers()
                    restOfQuery = self.path[len(item['info']['name'])+1:]
                    #print("Rest of query: " + restOfQuery)
                    res = BytesIO()
                    req = requests.get(
                        "http://localhost:" + str(self.pr.runningProcesses[i]['port']) + restOfQuery)
                    res.write(str.encode(req.text))
                    self.wfile.write(res.getvalue())

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        print(str(self.path))
        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.send_header('Access-Control-Allow-Credentials', 'true')
        self.send_header('Access-Control-Allow-Origin',
                         str(self.headers["Origin"]))
        self.end_headers()
        path1 = str(self.path)
        if (path1.startswith("/upload")):
            print("Uploading new file!")
            query = parse_qs(path1[8:])
            name = str(query['name']).replace("['\"", "").replace("\"']", "")
            try:
                open(self.fs.getFilenameByName(name), "w").close()
                jsonFile = open("thingsaves.json", "r")
                savesAsJson = json.loads(jsonFile.read())
                jsonFile.close()
                scriptFile = codecs.open(
                    self.fs.getFilenameByName(name), "w", "utf-8")
                scriptFile.write(body.decode())
                scriptFile.close()
                self.pr.restartProcess(name)
                response = BytesIO()
                response.write(b'New Script Succesfully Uploaded')
                response.write(b'Received: ')
                response.write(body)
                self.wfile.write(response.getvalue())
                pass
            except Exception:
                print("Error: "+Exception)
                response = BytesIO()
                response.write(b'Specified Script file does not exist.')
                self.wfile.write(response.getvalue())
                pass


process1 = None
process_running = False
root = tk.Tk()
root.wm_attributes("-transparentcolor", "grey")
root.geometry("500x500")
app = Application(master=root)

while True:
    app.update()
    if(process_running == True):
        timeNow = datetime.now().strftime("%H:%M")
        if (str(timeNow) == "01:00"):
            jsonFile = open("thingsaves.json", "r")
            req = requests.post(
                "http://iotdev.htlwy.ac.at/thing/iotusecases2020/setCloudscript", data=jsonFile.read())
