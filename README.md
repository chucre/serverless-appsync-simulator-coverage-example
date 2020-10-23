# serverless-appsync-simulator-coverage-example
Example how to use serverless-appsync-simulator-coverage-example

## Coverage folder
In this repo we add the `coverage` folder so you can have an Idea what is generate with the command `npm run test`:

```

> serverless-appsync-simulator-coverage-example@0.0.1 test /Users/fernandochucre/code/chucre/serverless-appsync-simulator-coverage-example
> npm run ci && npm run coverage:report


> serverless-appsync-simulator-coverage-example@0.0.1 ci /Users/fernandochucre/code/chucre/serverless-appsync-simulator-coverage-example
> start-server-and-test offline 20002 test:just-api

1: starting server using command "npm run offline"
and when url "[ 'http://localhost:20002' ]" is responding with HTTP status code 200
running tests using command "npm run test:just-api"


> serverless-appsync-simulator-coverage-example@0.0.1 offline /Users/fernandochucre/code/chucre/serverless-appsync-simulator-coverage-example
> sls offline start

AppSync Simulator: AppSync endpoint: http://192.168.1.26:20002/graphql
AppSync Simulator: GraphiQl: http://192.168.1.26:20002
Serverless: Prepare injects
offline: Starting Offline: dev/us-west-2.
offline: Offline [http for lambda] listening on http://localhost:3002
offline: Function names exposed for local invocation by aws-sdk:

> serverless-appsync-simulator-coverage-example@0.0.1 test:just-api /Users/fernandochucre/code/chucre/serverless-appsync-simulator-coverage-example
> just-api specs --recursive --parallel 8

Found suites:
  - /Users/fernandochucre/code/chucre/serverless-appsync-simulator-coverage-example/specs/Query.getArgumentsValues.yml

Launcher will run suites: /Users/fernandochucre/code/chucre/serverless-appsync-simulator-coverage-example/specs/Query.getArgumentsValues.yml

   ✓ Get Patient (47ms)

  Done: /Users/fernandochucre/code/chucre/serverless-appsync-simulator-coverage-example/specs/Query.getArgumentsValues.yml (Passed)

0 skipped, 0 failed, 1 passed (1 tests)
0 skipped, 0 failed, 1 passed (1 suites)
Duration: 73ms


offline: Got SIGINT signal. Offline Halting...
AppSync Simulator: Halting AppSync Simulator
Serverless: Collecting coverage
offline: Halting offline server

> serverless-appsync-simulator-coverage-example@0.0.1 coverage:report /Users/fernandochucre/code/chucre/serverless-appsync-simulator-coverage-example
> istanbul report text html cobertura

----------------------------------------|----------|----------|----------|----------|----------------|
File                                    |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------------------------------------|----------|----------|----------|----------|----------------|
 __root__/                              |    22.58 |       50 |      100 |    36.84 |                |
  Query.getArgumentsValues.request.vtl  |    22.73 |       50 |      100 |    35.71 |... 7,8,9,14,15 |
  Query.getArgumentsValues.response.vtl |    22.22 |       50 |      100 |       40 |          2,3,5 |
----------------------------------------|----------|----------|----------|----------|----------------|
All files                               |    22.58 |       50 |      100 |    36.84 |                |
----------------------------------------|----------|----------|----------|----------|----------------|

Done
```