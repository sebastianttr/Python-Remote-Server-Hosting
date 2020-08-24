import paho.mqtt.client as mqtt  # import the client1
import time


def on_connect(client, userdata, flags, rc):

    if rc == 0:

        print("Connected to broker")

        global Connected  # Use global variable
        Connected = True  # Signal connection

    else:

        print("Connection failed")


def on_message(client, userdata, message):
    print("message received ", str(message.payload.decode("utf-8")))
    print("message topic=", message.topic)


Connected = False

broker_address = "192.168.0.159"
# broker_address="iot.eclipse.org"
print("creating new instance")
client = mqtt.Client("P1")  # create new instance
client.on_message = on_message  # attach function to callback
client.on_connect = on_connect  # attach function to callback
print("connecting to broker")
client.connect(broker_address)  # connect to broker
client.loop_start()  # start the loop
print("Subscribing to topic ", "python")
client.subscribe("python")

while Connected != True:  # Wait for connection
    time.sleep(0.1)

client.subscribe("python/test")

try:
    while True:
        time.sleep(1)

except KeyboardInterrupt:
    print("exiting")
    client.disconnect()
    client.loop_stop()
