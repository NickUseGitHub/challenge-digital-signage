# challenge-digital-signage

# OUT OF BOX TECHNOLOGY - CHALLENGE DIGITAL SIGNAGE

:warning: Please read the following requirement and condition before coding!

- Assume that you are assigned to implement the digital signage platform (Ads)
- 1 ads campaign can contains many ads(s) (imaging campaign is a playlist)
- Each ads is one of these type image, animated image (gif) or video (mp4)
- Each ads (image, animated image) should be able to set displaay duration in seconds (5 secs, 10 secs, ...)
- Each campagin must be able to apply condition such as start date, end date, time schedule and kiosk.
- If more than 1 campaigns are eligible to display, kiosk should randomly display 1 campaign

#### Example Use case

John need to create ads campaign that distrbute to kiosks in his network

- Ex. Campaign and conditions
  | Campaign | Available Date | Schedule | Kiosk |
  | -------- | ------------------------ | --------------------------- | -------- |
  | #1 | 2020-07-25 to 2020-07-31 | 08.00-12.00 and 15.00-19.00 | K01, K02 |
  | #2 | 2020-07-25 to 2020-07-31 | 13.00-14.00 and 20.00-21.00 | K01, K03 |
  | #3 | 2020-07-28 to 2020-08-05 | 08.00-13.00 and 15.00-19.00 | K02, K03 |

### TASK

- :+1: Design Database
- :+1: Design API and Mock API Response (https://designer.mocky.io/)
- :+1: Implement Backend base on any stacks you like (NodeJS, Go, PHP, ...)
- :+1: Design and implement Frontend base on any stacks you like (Vue, React, Angular, Vanila Html/CSS, ...)
- :+1: Design User Interface (UI)
  - Ads Display Screen
  - Campaign management screen
- :+1: Focus on good [code quality](https://medium.com/@mkt_43322/why-is-code-quality-such-a-big-deal-for-developers-91bdace85d44).
  - Readability, consistency — how easy it is to read and understand sections of the code; this includes code clarity, simplicity, and documentation.
  - Predictability, reliability, and robustness — software behavior should be predictable, and not prone to hidden bugs.
  - Maintainability and extensibility — fixing, updating and improving software should be as simple as possible, not inherently complex.
- Technologies, libraries and skills
  - Frontend : React, Vue, Angular
  - Backend : NodeJS, Go, PHP, ...
  - API & Mock Data : https://designer.mocky.io/
  - Deploy : Firebase Hosting,
- Bonus!!
  - Unit and Integration testing such as
    - [jest](https://jestjs.io/)
    - others
  - UI testing with automate testing tools such as
    - [cypress](https://www.cypress.io/)
    - [Robot Framework](https://robotframework.org/)
    - [katalon](https://www.katalon.com/)
  - UX/UI
  - Coding style, clean?, easy readable?
- Scoring criteria

  | Task                       | Required             | Score |
  | -------------------------- | -------------------- | ----- |
  | Backend/Core Functionality | :white_check_mark:   | 40    |
  | Frontend                   | :white_check_mark:   | 30    |
  | DB Design, REST with Mocky | :white_check_mark:   | 10    |
  | Bonus                      | :white_large_square: | 20    |

## :ok_hand: Acceptance agreement

1. Fork this GitHub project.
2. Open `issue` feature in your repository (Options > Features > Checked on Issues) [#Reference](https://softwareengineering.stackexchange.com/questions/179468/forking-a-repo-on-github-but-allowing-new-issues-on-the-fork)
3. Put your code in the `code` folder.
4. Also provide instruction to run your project

## Any question? :see_no_evil::hear_no_evil::speak_no_evil:

Open your issue from this link below

https://github.com/Out-Of-Box-Technology/challenge-digital-signage/issues

# What have done

| Task                      | Status             |
| ------------------------- | ------------------ |
| Design Database           | :white_check_mark: |
| APIs                      | :white_check_mark: |
| API Docs                  | :white_check_mark: |
| Frontend with React       | :white_check_mark: |
| Code Quality              | :white_check_mark: |
| Test                      | :white_check_mark: |
| ESlint                    | :white_check_mark: |
| Auto format with prettier | :white_check_mark: |
| Docker-compose            | :white_check_mark: |

## Docs APIs

> Please check api-docs from this url **http://localhost:3001/api-docs**

## Design Database

> please see in this file **code/api/src/modules/campaign/seeds.ts**

## To start this application on local

### With Docker

```
step 1) open Docker
step 2) run command `./start.sh` (for Mac)
```

### Without Docker

```
cd code/api
yarn && yarn dev

then open with new terminal and goto
cd code/app
yarn && yarn dev
```

### Contact with Developer

Line: nickt.tnick

Email: nickt.tnick@gmail.com
