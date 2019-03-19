# DigitalMermaid

Digitalmermaid is a server to be implemented in a Digitalocean remote server. Its a server made with ExpressJS on Nodejs and the server itself has been Dockerized with Docker.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install to run the project:

```
Docker
```

Or if you do not want to install docker, you need to install:

```
Nodejs
```

### Installing

A step by step series of examples that tell you how to get a development env running

After having installed Docker, you need to build the docker image first by running

```
docker build --tag=digitalmermaid .
```

And then you only need to run the docker container with the script provided

```
./start
```

If you did not install docker and want to use the Nodejs approach, just run

```
node index.js
```

And in both cases, you will have the server running in port 3000.

## Running the tests

To test, just enter in you browser the following link: [localhost](http://localhost:3000)

## Deployment

For deployment, I believe the only thing you should need will be to change the port by changing it in the config.js file.

## Built With

* [NodeJs](https://nodejs.org/) - The Javascript runtime.
* [ExpressJs](https://expressjs.com/) - Javascript web framework.
* [Docker](https://www.docker.com/) - Modern platform for containerization.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Agostina Bufano** - [Portfolio](http://agostinabufano.com/)

## License

This project is licensed under the MIT License.
