
function Device(name, type, status = "off") {
    this.name = name;
    this.type = type;
    this.status = status;
  }
  
  Device.prototype.turnOn = function () {
    this.status = "on";
    console.log(`${this.name} is now ON.`);
  };
  
  Device.prototype.turnOff = function () {
    this.status = "off";
    console.log(`${this.name} is now OFF.`);
  };
  
  Device.prototype.getStatus = function () {
    console.log(`${this.name} is currently ${this.status}.`);
  };
  
  
  function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
  }
  
  SmartHome.prototype.addDevice = function (device) {
    this.devices.push(device);
    console.log(`${device.name} added to ${this.owner}'s smart home.`);
  };
  
  SmartHome.prototype.removeDevice = function (deviceName) {
    this.devices = this.devices.filter((device) => device.name !== deviceName);
    console.log(`${deviceName} removed from ${this.owner}'s smart home.`);
  };
  
  SmartHome.prototype.listDevices = function () {
    console.log(`${this.owner}'s devices:`);
    this.devices.forEach((device) => {
      console.log(`- ${device.name} (${device.type}): ${device.status}`);
    });
  };
  
  
  function SmartDevice(name, type, brand, connectivity = "online") {
    Device.call(this, name, type);
    this.brand = brand;
    this.connectivity = connectivity;
  }
  
  SmartDevice.prototype = Object.create(Device.prototype);
  SmartDevice.prototype.constructor = SmartDevice;
  
  SmartDevice.prototype.updateFirmware = async function () {
    console.log(`Updating firmware for ${this.name}...`);
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    console.log(`${this.name} firmware updated successfully.`);
  };
  
  SmartDevice.prototype.checkConnectivity = function () {
    console.log(`${this.name} is currently ${this.connectivity}.`);
  };
  

  function SmartLight(name, brand, brightness = 50, color = "white") {
    SmartDevice.call(this, name, "light", brand);
    this.brightness = brightness;
    this.color = color;
  }
  
  SmartLight.prototype = Object.create(SmartDevice.prototype);
  SmartLight.prototype.constructor = SmartLight;
  
  SmartLight.prototype.adjustBrightness = function (level) {
    this.brightness = level;
    console.log(`${this.name} brightness set to ${this.brightness}%.`);
  };
  
  SmartLight.prototype.changeColor = function (newColor) {
    this.color = newColor;
    console.log(`${this.name} color changed to ${this.color}.`);
  };
  
 
  function SmartThermostat(name, brand, temperature = 72, mode = "auto") {
    SmartDevice.call(this, name, "thermostat", brand);
    this.temperature = temperature;
    this.mode = mode;
  }
  
  SmartThermostat.prototype = Object.create(SmartDevice.prototype);
  SmartThermostat.prototype.constructor = SmartThermostat;
  
  SmartThermostat.prototype.setTemperature = function (temp) {
    this.temperature = temp;
    console.log(`${this.name} temperature set to ${this.temperature}°F.`);
  };
  
  SmartThermostat.prototype.changeMode = function (newMode) {
    this.mode = newMode;
    console.log(`${this.name} mode changed to ${this.mode}.`);
  };
  

  function User(username, password) {
    this.username = username;
    this.password = password;
    this.smartHome = new SmartHome(username);
  }
  
  User.prototype.authenticate = async function () {
    console.log(`Authenticating user ${this.username}...`);
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    console.log(`${this.username} authenticated successfully.`);
  };
  
 
  (async function () {
   
    const light1 = new SmartLight("Living Room Light", "Philips");
    const thermostat = new SmartThermostat("Thermostat", "Nest", 70, "cool");
  
   
    const user = new User("JohnDoe", "password123");
  
    await user.authenticate();
  
    
    user.smartHome.addDevice(light1);
    user.smartHome.addDevice(thermostat);
    user.smartHome.listDevices();
  
   
    light1.turnOn();
    light1.adjustBrightness(75);
    light1.changeColor("blue");
    light1.checkConnectivity();
    await light1.updateFirmware();
  
    thermostat.setTemperature(68);
    thermostat.changeMode("heat");
    thermostat.getStatus();
  
    user.smartHome.removeDevice("Thermostat");
    user.smartHome.listDevices();
  })();
  