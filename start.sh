#!/bin/bash

docker run --rm --name digitalmermaid -v `pwd`:/app -w /app -p 3000:3000 -d digitalmermaid
