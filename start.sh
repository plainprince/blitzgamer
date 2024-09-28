sudo apt install nvm
nvm install 22.5.1
nvm use 22.5.1
sudo wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.deb
sudo dpkg -i jdk-17_linux-x64_bin.deb
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk-17/bin/java 1
sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk-17/bin/javac 1
echo "JAVA_HOME="/usr/lib/jvm/jdk-17/"" >> "/etc/environment"
source /etc/environment
node index.js