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

>>>>>>>>>>>>>create routing node_modules
Integrate routing module to app module and inject the router-app to index.html

>>>>>>>>>>>>>Create components for header and footer
Add them above and below router-app in index.html

>>>>>>>>>>>>>Create service data files (ng g service data)
Import httpclient module in it and app module. we can call http services in data services by writing functions which can be called in required components to retrieve data from those services.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Notes : 

1.  If the url is  "/app?param1=habits&param2=123&id=1"
    import { ActivatedRoute, Router } from '@angular/router';
    //..//
    constructor(
		private router: Router,
		private route : ActivatedRoute
	) {}
    this.route.paramMap.subscribe(
        params => {
            this.urlId = params.get('id');     ------> to store url data
        }
    );
    this.route.queryParams.subscribe(
        params => {
            this.urlData = params['param1']+params['param2'];     ----> url query params
        }
    );
    // if url is "/param1/:param1/param2/:param2"
    this.param1 = this.route.snapshot.params.param1;
    this.param2 = this.route.snapshot.params.param2;   ------> parameters


    this.currentPath = this.router.url;    ----> To fetch url data
    //..//

2.  Http study material :   https://coursetro.com/posts/code/154/Angular-6-Tutorial---Learn-Angular-6-in-this-Crash-Course,
                            https://angular.io/guide/http

3.  (i)     URL path of window  :   window.location.pathname
    (ii)    URL navigation end  :
            this.router.events.pipe(
                filter(e => e instanceof NavigationEnd)
            )
            .subscribe( (navEnd:NavigationEnd) => {
                console.log(navEnd.urlAfterRedirects);
            });
    (iii)   URL load at different phases of page load   :
            constructor(router: Router) {
                router.events.subscribe((url:any) => console.log(url));
                console.log(router.url);  // to print only path eg:"/login"
            }
    //https://stackoverflow.com/questions/37764665/typescript-sleep//

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

ANGULAR dependencies

1.  /router dependencies {
        ActivatedRoute{
            queryParams,
            snapshot,
            get()
        },
        Router{
            url,
            events{
                NavigationStart,
                RoutesRecognized,
                GuardsCheckStart,
                ChildActivationStart,
                ActivationStart,
                GuardsCheckEnd,
                ResolveStart,
                ResolveEnd,
                ActivationEnd,
                ChildActivationEnd,
                NavigationEnd,
                Scroll
                    //events object contain//
                    >id: 1
                    >state: RouterStateSnapshot
                    >root: ActivatedRouteSnapshot
                    >url: "/login"
                    >_root: TreeNode {value: ActivatedRouteSnapshot, children: Array(1)}
                    >__proto__: Tree
                    >url: "/login"
                    >urlAfterRedirects: "/login"
                    //..//
            },
            hooks{
                beforePreActivation,
                afterPreActivation
            },
            navigated,
            navigateId,
            currentUrlTree,
            rawUrlTree,
            urlSerializer,
            urlHandlingStrategy,
            urlUpdateStrategy
            ...
        },
        ParamsMap{}
    }
2.  /rxjs dependencies{
        Observable{}
    }
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

CONCEPTS :

1.  async/await with promise
2.  router-outlet
3.  ng-container
4.  declaring variables
5.  httpclient
6.  ngFor
7.  ngIf
8.  pipes - https://developer.telerik.com/topics/web-development/creating-custom-filter-pipe-angular-2/
9.  call signatures
10. sleep



