------------------------------------To setup angular6-----------------------------------------
>>>>>>>>>>>>>Install Node js and npm.
>>>>>>>>>>>>>Grant write access permission to node_modules path(In case of MAC).
[[[[[[Saw this from Fixing npm permissions and it once help, maybe you could give it a shot as well.

Option 1: Change the permission to npm's default directory
Find the path to npm's directory:

npm config get prefix
For many systems, this will be /usr/local.

WARNING: If the displayed path is just /usr, switch to Option 2 or you will mess up your permissions.

Change the owner of npm's directories to the name of the current user (your username!):

sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
This changes the permissions of the sub-folders used by npm and some other tools (lib/node_modules, bin, and share).

Option 2: Change npm's default directory to another directory
There are times when you do not want to change ownership of the default directory that npm uses (i.e. /usr) as this could cause some problems, for example if you are sharing the system with other users.

Instead, you can configure npm to use a different directory altogether. In our case, this will be a hidden directory in our home folder.

Make a directory for global installations:

mkdir ~/.npm-global
Configure npm to use the new directory path:

npm config set prefix '~/.npm-global'
Open or create a ~/.profile file and add this line:

export PATH=~/.npm-global/bin:$PATH
Back on the command line, update your system variables:

source ~/.profile
Test: Download a package globally without using sudo.

`npm install node-g.raphael --save`
Instead of steps 2-4, you can use the corresponding ENV variable (e.g. if you don't want to modify ~/.profile):

NPM_CONFIG_PREFIX=~/.npm-global
Option 3: Use a package manager that takes care of this for you.
If you're doing a fresh install of Node on Mac OS, you can avoid this problem altogether by using the Homebrew package manager. Homebrew sets things up out of the box with the correct permissions.

brew install node

]]]]]]

>>>>>>>>>>>>>Install angularCLI in your computer (if ng command doesn,t work)
[[[[[npm install -g @angular/cli@latest]]]]]

>>>>>>>>>>>>>You can find your angular version
[[[[[ng -v]]]]]

>>>>>>>>>>>>>Travel to  a directory to create the angular project
[[[[[ng new <project_name>]]]]]

>>>>>>>>>>>>>If you have created the project/trying to enter an existing project - move into the directory and establish a server using ng serve.
[[[[[ng serve   (This will help you start a server by compiling the node packages and will provide you a url to view your local Project)]]]]

>>>>>>>>>>>>>To stop the server
[[[[[Ctrl C (Only Mac)]]]]]