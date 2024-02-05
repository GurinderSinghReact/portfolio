import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import moment from "moment";
import CollapsibleCard from "../../Components/CollapsibleCard";
import EducationCardMobile from "../../Components/EducationCardMobile";

export default function About() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const topSkills = [
    {
      name: "HTML",
      img: "https://www.sambitsankalp.tech/_next/static/media/html.7c065071.svg",
    },
    {
      name: "CSS",
      img: "data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iIzIxOTZGMyIgZD0ibTEgMCAxLjI3NSAxNC40TDggMTZsNS43MjMtMS41OTlMMTUgMHoiLz48cGF0aCBmaWxsPSIjRkFGQUZBIiBkPSJtMTIuMjc0IDQuNzA5LS4xNjEgMS44MDktLjQ4NiA1LjQyM0w4IDEyLjk0NGwtLjAwMy4wMDEtMy42MjUtMS4wMDQtLjI1My0yLjgzNmgxLjc3NmwuMTMyIDEuNDcxIDEuOTcxLjUzMi4wMDEtLjAwMSAxLjk3NC0uNTMyLjI2OS0yLjQ1MS02LjIwOC4wMTctLjE3Ni0xLjY3NiA2LjUzMy0uMDc3LjEzMi0xLjc5NC02Ljg0LjAxOS0uMTE1LTEuNjY5aDguODY0eiIvPjwvc3ZnPg==",
    },
    {
      name: "Bootstrap",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png",
    },
    {
      name: "Javascript",
      img: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZD0iTTAgMGgyNTZ2MjU2SDBWMHoiIGZpbGw9IiNGN0RGMUUiLz48cGF0aCBkPSJNNjcuMzEyIDIxMy45MzJsMTkuNTktMTEuODU2YzMuNzggNi43MDEgNy4yMTggMTIuMzcxIDE1LjQ2NSAxMi4zNzEgNy45MDUgMCAxMi44OS0zLjA5MiAxMi44OS0xNS4xMnYtODEuNzk4aDI0LjA1N3Y4Mi4xMzhjMCAyNC45MTctMTQuNjA2IDM2LjI1OS0zNS45MTYgMzYuMjU5LTE5LjI0NSAwLTMwLjQxNi05Ljk2Ny0zNi4wODctMjEuOTk2TTE1Mi4zODEgMjExLjM1NGwxOS41ODgtMTEuMzQxYzUuMTU3IDguNDIxIDExLjg1OSAxNC42MDcgMjMuNzE1IDE0LjYwNyA5Ljk2OSAwIDE2LjMyNS00Ljk4NCAxNi4zMjUtMTEuODU4IDAtOC4yNDgtNi41My0xMS4xNy0xNy41MjgtMTUuOThsLTYuMDEzLTIuNThjLTE3LjM1Ny03LjM4Ny0yOC44Ny0xNi42NjctMjguODctMzYuMjU3IDAtMTguMDQ0IDEzLjc0Ny0zMS43OTIgMzUuMjI4LTMxLjc5MiAxNS4yOTQgMCAyNi4yOTIgNS4zMjggMzQuMTk2IDE5LjI0N0wyMTAuMjkgMTQ3LjQzYy00LjEyNS03LjM4OS04LjU5MS0xMC4zMS0xNS40NjUtMTAuMzEtNy4wNDYgMC0xMS41MTQgNC40NjgtMTEuNTE0IDEwLjMxIDAgNy4yMTcgNC40NjggMTAuMTQgMTQuNzc4IDE0LjYwOGw2LjAxNCAyLjU3N2MyMC40NSA4Ljc2NSAzMS45NjMgMTcuNyAzMS45NjMgMzcuODA0IDAgMjEuNjU0LTE3LjAxMiAzMy41MS0zOS44NjcgMzMuNTEtMjIuMzM5IDAtMzYuNzc0LTEwLjY1NC00My44MTktMjQuNTc0Ii8+Cgk8bWV0YWRhdGE+CgkJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpyZGZzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgoJCQk8cmRmOkRlc2NyaXB0aW9uIGFib3V0PSJodHRwczovL2ljb25zY291dC5jb20vbGVnYWwjbGljZW5zZXMiIGRjOnRpdGxlPSJqYXZhc2NyaXB0IiBkYzpkZXNjcmlwdGlvbj0iamF2YXNjcmlwdCIgZGM6cHVibGlzaGVyPSJJY29uc2NvdXQiIGRjOmRhdGU9IjIwMTctMDYtMTciIGRjOmZvcm1hdD0iaW1hZ2Uvc3ZnK3htbCIgZGM6bGFuZ3VhZ2U9ImVuIj4KCQkJCTxkYzpjcmVhdG9yPgoJCQkJCTxyZGY6QmFnPgoJCQkJCQk8cmRmOmxpPkljb24gTWFmaWE8L3JkZjpsaT4KCQkJCQk8L3JkZjpCYWc+CgkJCQk8L2RjOmNyZWF0b3I+CgkJCTwvcmRmOkRlc2NyaXB0aW9uPgoJCTwvcmRmOlJERj4KICAgIDwvbWV0YWRhdGE+PC9zdmc+Cg==",
    },
    {
      name: "Typescript",
      img: "data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwb2x5Z29uIGZpbGw9IiMxNjc3QzciIHBvaW50cz0iMCAxMiAwIDI0IDI0IDI0IDI0IDAgMCAwIDAgMTIiLz48cG9seWdvbiBmaWxsPSIjMTM2OEFEIiBwb2ludHM9IjEyIDAgMCAwIDAgMjQgMTIgMjQgMTIgMCIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNC41NjMgMTkuNjI2Yy4xMDgtLjA2Mi41MTEtLjI5NC44OTItLjUxNWwuNjktLjQuMTQ1LjIxNGMuMjAzLjMwOC42NDMuNzMxLjkxLjg3My43NjYuNDA0IDEuODE3LjM0OCAyLjMzNS0uMTE4LjE5My0uMTY0LjMxNC0uNDA2LjMxNC0uNjc1bC0uMDAxLS4wNDd2LjAwMmMwLS4yNzgtLjAzNS0uNC0uMTgtLjYwOS0uMTg2LS4yNjctLjU2Ny0uNDktMS42NDktLjk2MS0xLjIzNy0uNTMzLTEuNzcxLS44NjMtMi4yNTgtMS4zODktLjI5NC0uMzM0LS41MjEtLjczNy0uNjUzLTEuMTc4bC0uMDA2LS4wMjJjLS4wOTEtLjMzOS0uMTE0LTEuMTktLjA0Mi0xLjUzMS4yNTUtMS4xOTYgMS4xNTgtMi4wMjkgMi40NjEtMi4yNzcuNDIzLS4wOCAxLjQwNi0uMDUxIDEuODIxLjA1M3YuMDAxYy42MS4xNTMgMS4wNzQuNDIzIDEuNTAxLjg2NS4yMjEuMjM1LjU0OS42NjYuNTc1Ljc2OS4wMDguMDMxLTEuMDM2LjczLTEuNjY4IDEuMTIzLS4wMjMuMDE0LS4xMTUtLjA4NC0uMjE3LS4yMzYtLjMxLS40NS0uNjMzLS42NDQtMS4xMjgtLjY3OS0uNzI4LS4wNS0xLjE5Ni4zMzEtMS4xOTMuOTY4bC0uMDAxLjAzN2MwIC4xNS4wMzguMjkzLjEwNS40MTZsLS4wMDItLjAwNGMuMTYxLjMzMS40NTguNTMgMS4zOTEuOTMzIDEuNzE5LjczOSAyLjQ1NCAxLjIyNiAyLjkxMSAxLjkyLjUxLjc3My42MjUgMi4wMDguMjc4IDIuOTI2LS4zOC45OTgtMS4zMjUgMS42NzYtMi42NTUgMS44OTktLjQxMS4wNzMtMS4zODcuMDYyLTEuODI4LS4wMTctLjk2NC0uMTcyLTEuODc4LS42NDktMi40NDItMS4yNzQtLjIyMS0uMjQyLS42NTItLjg3OS0uNjI1LS45MjRDMTQuMzU0IDE5Ljc1MSAxNC40NTMgMTkuNjg5IDE0LjU2MyAxOS42MjZMMTQuNTYzIDE5LjYyNnpNNS4yNTkgMTIuMDY0YzAtLjUzMy4wMS0uOTc5LjAyNi0uOTg5LjAxMS0uMDE3IDEuOTEzLS4wMjUgNC4yMTctLjAyMWw0LjE5NS4wMTEuMDExLjk4LjAwOC45ODNoLTMuMTI1djguODc2SDguMzh2LTguODc2SDUuMjU5VjEyLjA2NEw1LjI1OSAxMi4wNjR6Ii8+PHBhdGggZmlsbD0iI0RFREVERSIgZD0iTTIxLjAwNywxNi40ODhoLTQuNzAxYzAuMzkyLDAuMjg4LDAuOTAxLDAuNTUsMS43MTMsMC45YzEuMDgzLDAuNDcxLDEuNDYzLDAuNjk1LDEuNjQ5LDAuOTYxYzAuMTQ1LDAuMjA5LDAuMTgsMC4zMzEsMC4xOCwwLjYwOXYtMC4wMDJsMC4wMDEsMC4wNDdjMCwwLjI3LTAuMTIxLDAuNTExLTAuMzE0LDAuNjc1Yy0wLjI4NSwwLjI1Ni0wLjczMSwwLjM4OC0xLjIwMiwwLjM4OGMtMC4zODYsMC0wLjc4OC0wLjA4OC0xLjEzMy0wLjI3Yy0wLjI2Ny0wLjE0MS0wLjcwOC0wLjU2NC0wLjkxLTAuODczbC0wLjE0NS0wLjIxNGwtMC42OSwwLjRjLTAuMzgxLDAuMjIxLTAuNzg0LDAuNDUzLTAuODkyLDAuNTE1Yy0wLjExLDAuMDYzLTAuMjA5LDAuMTI1LTAuMjIsMC4xNDFjLTAuMDI3LDAuMDQ1LDAuNDA0LDAuNjgyLDAuNjI1LDAuOTI0YzAuNTY0LDAuNjI1LDEuNDc4LDEuMTAyLDIuNDQyLDEuMjc0YzAuMjQxLDAuMDQzLDAuNjQxLDAuMDY2LDEuMDIxLDAuMDY2YzAuMzE3LDAsMC42Mi0wLjAxNiwwLjgwNy0wLjA0OWMxLjMzLTAuMjIzLDIuMjc1LTAuOTAxLDIuNjU1LTEuODk5YzAuMzQ3LTAuOTE4LDAuMjMyLTIuMTUzLTAuMjc4LTIuOTI2QzIxLjQ1NiwxNi45MTYsMjEuMjYzLDE2LjY5OSwyMS4wMDcsMTYuNDg4TDIxLjAwNywxNi40ODh6Ii8+PHBvbHlnb24gZmlsbD0iI0RFREVERSIgcG9pbnRzPSIxMC41OTEgMTYuNDg4IDguMzggMTYuNDg4IDguMzggMjEuOTA1IDEwLjU5MSAyMS45MDUgMTAuNTkxIDE2LjQ4OCIvPjwvc3ZnPg==",
    },
    {
      name: "React",
      img: "data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMS45OTkiIHI9IjIuMTQ3IiBmaWxsPSIjNTNDMURFIi8+PHBhdGggZmlsbD0iIzUzQzFERSIgZD0iTTQuNTE0IDE1LjgwMWMuMjExLjA3LjQyMi4xNDEuNjM4LjIwMi0uMDcuMjgxLS4xMzEuNTU4LS4xODguODQ0LS40OTIgMi42MDItLjEwOCA0LjY2NCAxLjEyIDUuMzcyIDEuMjY2LjczMSAzLjM5NC0uMDE5IDUuNDY2LTEuODMzLjE2NC0uMTQ1LjMyOC0uMjk1LjQ5Mi0uNDU1LjIwNi4yMDIuNDIyLjM5NC42MzcuNTgxIDIuMDA2IDEuNzI1IDMuOTg5IDIuNDIzIDUuMjEzIDEuNzE2IDEuMjY2LS43MzEgMS42NzgtMi45NDggMS4xNDQtNS42NDhhMTguNDc3IDE4LjQ3NyAwIDAgMC0uMTQxLS42MzNjLjE1LS4wNDIuMjk1LS4wODkuNDQxLS4xMzYgMi43MDUtLjg5NSA0LjY2NC0yLjM0NCA0LjY2NC0zLjgzIDAtMS40Mi0xLjg0Ny0yLjc5OC00LjM5Ny0zLjY3NXYtLjAwMWEyNC41ODkgMjQuNTg5IDAgMCAwLS43NTktLjIzOWMuMDQyLS4xNzMuMDgtLjM0Ny4xMTctLjUyLjU3Ny0yLjc5NC4xOTctNS4wMzgtMS4wODMtNS43NzktMS4yMzMtLjcwOC0zLjI0NC4wMjgtNS4yNzggMS44LS4yMDIuMTczLS4zOTguMzU2LS41ODYuNTM5YTE0LjcwMiAxNC43MDIgMCAwIDAtLjM4OS0uMzYxQzkuNDkyIDEuODUxIDcuMzU1IDEuMDU0IDYuMDc1IDEuOGMtMS4yMjguNzEzLTEuNTk0IDIuODI3LTEuMDc4IDUuNDY5LjA1Mi4yNjMuMTA4LjUyLjE3My43ODMtLjMuMDg0LS41OTUuMTc4LS44NzIuMjc3QzEuNzk1IDkuMTk2IDAgMTAuNTY1IDAgMTEuOTgxYzAgMS40NjMgMS45MTIgMi45MjkgNC41MTQgMy44MnptNi4zNzUgMy44MTlhOC41ODUgOC41ODUgMCAwIDEtMi42NDQgMS42NTVjLS41Mi4yNDgtMS4xMi4yNzItMS42NTUuMDYxLS43NDUtLjQzMS0xLjA1NS0yLjA4Ni0uNjMzLTQuMzEzLjA1Mi0uMjYyLjEwOC0uNTI1LjE3My0uNzgzIDEuMDUuMjI1IDIuMTA5LjM4IDMuMTgzLjQ1OWEyNC42MDYgMjQuNjA2IDAgMCAwIDIuMDI1IDIuNTAzYy0uMTUuMTQ1LS4zLjI4Ni0uNDUuNDE3bC4wMDEuMDAxem01Ljk1My04LjgwMmEzNi41NiAzNi41NiAwIDAgMC0uNjgtMS4yMjhjLS4yMy0uMzk4LS40NjktLjc5Mi0uNzE3LTEuMTgxLjc1NS4wOTQgMS40NzcuMjIgMi4xNTIuMzc1YTIwLjczNyAyMC43MzcgMCAwIDEtLjc1NSAyLjAzNHptLjAwOSAyLjMzNGMuMy42OC41NjMgMS4zNjkuNzkyIDIuMDc3LS43MjcuMTY0LTEuNDYyLjI5MS0yLjIwMy4zNzVhMzIuNzE3IDMyLjcxNyAwIDAgMCAxLjQxMS0yLjQ1MnptLS41NDItMS4xNjZhMzEuNDk1IDMxLjQ5NSAwIDAgMS0yLjE0NiAzLjc0Yy0uNjk4LjA1Mi0xLjQyNS4wNzUtMi4xNjEuMDc1cy0xLjQ0OC0uMDIzLTIuMTM3LS4wNjZhMjguNDggMjguNDggMCAwIDEtMi4xNjEtMy43MzFoLS4wMDJhMjguMjQgMjguMjQgMCAwIDEgMi4xNDctMy43MjYgMjkuMTUxIDI5LjE1MSAwIDAgMSA0LjMwNCAwYy4zOTguNTkxLjc3OCAxLjE5NSAxLjEzOSAxLjgxNGEzMi4xOCAzMi4xOCAwIDAgMSAxLjAxNyAxLjg5NHpNNy44MzIgOS41OTljLS4yMy4zOTgtLjQ1NS44MDUtLjY2NiAxLjIxOGEyMi4zMDIgMjIuMzAyIDAgMCAxLS43NS0yLjA0M2MuNjc1LS4xNSAxLjM5Mi0uMjcyIDIuMTM3LS4zNjYtLjI0Ny4zODktLjQ5MS43ODctLjcyMSAxLjE5MXptLS42NjUgMy41OWMuMjE2LjQxMy40MzYuODIxLjY3IDEuMjI0LjIzOS40MDguNDgzLjgxNi43NDEgMS4yMTRhMjEuMjMgMjEuMjMgMCAwIDEtMi4xNzUtLjM1MmMuMjA2LS42NzUuNDY0LTEuMzczLjc2NC0yLjA4NnptNC44NzEgNS4yOTFhMjEuODczIDIxLjg3MyAwIDAgMS0xLjQyLTEuNzAxIDMyLjkxIDMyLjkxIDAgMCAwIDIuODA4LS4wMDUgMTkuOTQyIDE5Ljk0MiAwIDAgMS0xLjM4OCAxLjcwNnptNi4xMjcgMS40MDhhMi4wODYgMi4wODYgMCAwIDEtLjc3NCAxLjQ2NmMtLjc0NS40MzEtMi4zMzQtLjEzMS00LjA1LTEuNjAzYTIwLjE2MyAyMC4xNjMgMCAwIDEtLjU5NS0uNTM5IDIzLjIxIDIzLjIxIDAgMCAwIDEuOTc4LTIuNTEyIDIzLjEyNiAyMy4xMjYgMCAwIDAgMy4xOTctLjQ5MmMuMDQ3LjE5Mi4wODkuMzg0LjEyNy41NzJhOC41NCA4LjU0IDAgMCAxIC4xMTcgMy4xMDh6bS40MDctMTAuODU2Yy4yNDQuMDcuNDc4LjE0NS43MDMuMjIgMi4xODQuNzUgMy43MTcgMS44NjYgMy43MTcgMi43MTkgMCAuOTE5LTEuNjM2IDIuMTA1LTMuOTc1IDIuODc4LS4xMzEuMDQyLS4yNjIuMDg0LS4zOTguMTIyYTIzLjg0IDIzLjg0IDAgMCAwLTEuMTk1LTIuOTkxYy40NS0uOTU2LjgzLTEuOTQxIDEuMTQ4LTIuOTQ4ek0xMy4yNiA0LjMyNmMxLjc0NS0xLjUxOCAzLjM3MS0yLjExMyA0LjExMi0xLjY4Ny43OTIuNDU1IDEuMDk3IDIuMjkyLjYgNC43MDZhNy45ODggNy45ODggMCAwIDEtLjEwOC40NjkgMjQuMSAyNC4xIDAgMCAwLTMuMTU1LS40OTcgMjMuNTM2IDIzLjUzNiAwIDAgMC0xLjk5Ny0yLjQ5Yy4xODMtLjE3My4zNjEtLjMzNy41NDgtLjUwMXptLTEuMjUgMS4yMTljLjQ5Mi41MzQuOTU2IDEuMDk2IDEuMzg3IDEuNjc3YTMwLjg4MyAzMC44ODMgMCAwIDAtMi43ODkgMGMuNDU5LS42MDQuOTMzLTEuMTY2IDEuNDAyLTEuNjc3ek02LjU3MiAyLjY3MmMuNzg4LS40NTkgMi41MzYuMTk3IDQuMzc4IDEuODI4LjExNy4xMDMuMjM0LjIxNi4zNTYuMzI4YTIzLjY0MyAyMy42NDMgMCAwIDAtMi4wMTEgMi40ODggMjQuNzIgMjQuNzIgMCAwIDAtMy4xNS40ODhjLS4wNjEtLjIzOS0uMTEyLS40ODMtLjE2NC0uNzI3LS40NDEtMi4yNjktLjE1LTMuOTc5LjU5MS00LjQwNXpNNC42MjcgOS4yOGMuMjY3LS4wOTQuNTM5LS4xNzguODExLS4yNThhMjQuOTg2IDI0Ljk4NiAwIDAgMCAxLjE0OCAyLjk4MWMtLjQ1Ljk4LS44MzkgMS45OTItMS4xNjIgMy4wMjNsLS4wMDEuMDAxYTExLjIwNSAxMS4yMDUgMCAwIDEtLjU4MS0uMTgzYy0uOTk4LS4zMTQtMi4xMzMtLjgxMS0yLjk1My0xLjQ2MmEyLjEwMyAyLjEwMyAwIDAgMS0uODgxLTEuNDAyYzAtLjg1OCAxLjQ4MS0xLjk1NSAzLjYxOS0yLjd6Ii8+PC9zdmc+",
    },
    {
      name: "Redux",
      img: "data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzZDNEVCMCIgZD0iTTguMTUyIDMuNzExYy44OTktMS4xMzYgMi41OTItMS42OTcgMy43NDYtMS43MjYgMy4yMzYtLjA2MiA0LjU4NSA0LjAxMyA0LjY4OSA1LjYzM2wxLjQ5OC40NTRjLS4zNDUtNC45NjYtMy40LTcuNTcxLTYuMzIzLTcuNTcxQzkuMDIxLjUgNi40OSAyLjUxNCA1LjQ3IDUuNDY3Yy0xLjM5MyAzLjkzNy0uNDc5IDcuNzIyIDEuMjI5IDEwLjc1MS0uMTQ5LjE5Ny0uMjM5LjU0NC0uMjA5Ljg3Ny4wMjkuOTA5Ljc5MyAxLjY2NiAxLjcwOCAxLjY2NmguMDZhMS42OTkgMS42OTkgMCAwIDAgMS42NDgtMS43ODdjMC0uOTA5LS43NzktMS42NjQtMS42OTMtMS42NjRoLS4wNjFjLS4wNiAwLS4xNDkgMC0uMjI1LjAyOS0xLjI0My0yLjEyLTEuNzY4LTQuMzkyLTEuNTcyLTYuODQzLjExOS0xLjg0OC43MTktMy40NTMgMS43OTctNC43ODV6Ii8+PHBhdGggZmlsbD0iIzZDNEVCMCIgZD0iTS45MzIgMjAuODk4YzEuMDA0IDEuNTE0IDMuMDU3IDIuNDgyIDUuMzA0IDIuNDgyLjU5OSAwIDEuMjI5LS4wNDQgMS44NDMtLjE5NiAzLjg5Ni0uNzU3IDYuODQ4LTMuMTE5IDguNTQxLTYuNjAxbC4wMTQtLjAzMWMuODY5LS4wNzYgMS41NDMtLjg0OSAxLjQ5OS0xLjc3My0uMDQ2LS45MjQtLjc5NS0xLjY2NS0xLjcwOC0xLjY2NWgtLjA2MWMtLjk0My4wMzEtMS42NzguODMzLTEuNjQ4IDEuNzg4LjAzLjQ4NC4yMjYuODc4LjQ5NCAxLjE2NS0xLjA0OCAyLjA2LTIuNjIxIDMuNTczLTUuMDA0IDQuODQ2LTEuNjAzLjg0Ny0zLjI5NiAxLjE2Ni00Ljk0NC45MzktMS4zNzgtLjE5Ni0yLjQ1Ni0uODE5LTMuMTE2LTEuODE3LS45ODgtMS41MTUtMS4wNzgtMy4xNDktLjI1NS00Ljc4NC42MDEtMS4xODEgMS40OTktMi4wNDQgMi4wOTktMi40NjktLjE1LS4zOTMtLjMzLTEuMDU5LS40Mi0xLjU1OC00LjQzNyAzLjIwOS0zLjk4NiA3LjU5OS0yLjYzOCA5LjY3NHoiLz48cGF0aCBmaWxsPSIjNkM0RUIwIiBkPSJNMjMuNDY1IDIwLjIzYy44OTgtMS44MTcuODI0LTQuODc1LTEuNDY5LTcuNDk1bC0uMDE0LjAzYy0yLjMyMS0yLjc1Ni01LjczOC00LjI3LTkuNjM1LTQuMjdoLS41MWMtLjI1My0uNTYtLjgzNy0uOTA5LTEuNDk3LS45MDloLS4wNDVjLS45NDMgMC0xLjY3OC44MTktMS42NDcgMS43NzIuMDMuOTA4Ljc5NCAxLjY2NiAxLjcwOCAxLjY2NmguMDc0YTEuNjkyIDEuNjkyIDAgMCAwIDEuNDk4LTEuMDZoLjU1NWMyLjMwOSAwIDQuNDk1LjY4MSA2LjQ4OSAyLjAxMyAxLjUyNyAxLjAxNSAyLjYyMiAyLjM0NyAzLjIzNiAzLjkzNy41MzggMS4zMDIuNTA5IDIuNTc0LS4wNDUgMy42MzUtLjg1NCAxLjY2NS0yLjI5MyAyLjU0NC00LjE5NSAyLjU0NC0xLjE5OSAwLTIuMzY3LS4zNzktMi45NjctLjY1MS0uMzU5LjMwMS0uOTU5LjgwMS0xLjM5NCAxLjEwNSAxLjMxOC42MDQgMi42NTIuOTUzIDMuOTQuOTUzIDIuOTIyIDAgNS4wOTMtMS42NjQgNS45MTgtMy4yN3oiLz48L3N2Zz4=",
    },
  ];
  const bottomSkills = [
    {
      name: "Github",
      img: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
    },
    {
      name: "BitBucket",
      img: "https://cdn-icons-png.flaticon.com/128/6125/6125001.png",
    },
    {
      name: "Firebase",
      img: "https://www.sambitsankalp.tech/_next/static/media/firebase.14cd6e7d.svg",
    },
    {
      name: "Jira",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968875.png",
    },
    {
      name: "GraphQL",
      img: "https://www.sambitsankalp.tech/_next/static/media/graphql.0aaec670.svg",
    },
    {
      name: "RESTful",
      img: "https://cdn-icons-png.flaticon.com/128/1493/1493169.png",
    },
    {
      name: "JQuery",
      img: "data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzEyNjZBOSIgZD0iTTEuNDA2IDE2LjM0NmMuMDIzLjA1Mi4wNDkuMS4wNzcuMTQ4LjAxMy4wMjguMDMxLjA1Ny4wNDcuMDgzLjAyNi4wNTIuMDU0LjEwMi4wODEuMTUybC4xNTcuMjY0Yy4wMjkuMDQ5LjA1Ny4wOTcuMDkuMTQ1LjA1NS4wOTQuMTIuMTg2LjE3Ny4yOC4wMjYuMDM5LjA1LjA3OC4wNzkuMTE3LjExLjE3MS4yMS4zMTMuMzE3LjQ1MS4wNzYuMTAzLjE1Mi4yMDQuMjM0LjMwNS4wMjcuMDM4LjA1Ny4wNzYuMDg1LjExNGwuMjIxLjI2OGMuMDI3LjAzMS4wNTQuMDY3LjA4My4wOTkuMDk4LjExOC4yMDIuMjMyLjMwNi4zNDggMCAuMDAyLjAwMy4wMDQuMDA1LjAwNy4xMjkuMTYyLjI2OC4zMDYuNDIuNDM0bC4wMDQuMDA0Yy4wOC4wODIuMTYuMTYzLjI0NS4yNDNsLjEwMS4wOTdjLjExMS4xMDQuMjIyLjIwNy4zMzkuMzA3LjAwMiAwIC4wMDMuMDAyLjAwNS4wMDNsLjA1Ny4wNWMuMTAyLjA4OS4yMDUuMTc3LjMxLjI1OWwuMTI1LjEwNWMuMDg1LjA2OC4xNzMuMTMyLjI2LjE5OWwuMTM2LjEwNGMuMDkzLjA3LjE5Mi4xMzguMjg3LjIwNi4wMzUuMDI1LjA3LjA1LjEwNi4wNzNsLjAyOS4wMjMuMjgxLjE4NC4xMi4wOGMuMTQ3LjA5NC4yOTMuMTgyLjQzOS4yNy4wNDIuMDIxLjA4NC4wNDQuMTIzLjA2OC4xMDguMDYyLjIyLjEyNS4zMjkuMTgyLjA2LjAzNC4xMjIuMDYzLjE4NC4wOTQuMDc1LjA0Mi4xNTMuMDgzLjIzMy4xMjUuMDIyLjAwNy4wNC4wMTQuMDU4LjAyNGwuMDA0LS4wMDRjLjAzMy4wMTUuMDY0LjAzMS4wOTYuMDQ3LjEyLjA2LjI0NS4xMTcuMzc1LjE3My4wMjQuMDEuMDUuMDIuMDc2LjAzNC4xNDQuMDYzLjI4OC4xMjMuNDM3LjE4MS4wMzQuMDEuMDcuMDI3LjEwNS4wNC4xMzUuMDUxLjI3NC4xMDMuNDEyLjE1MmwuMDUuMDE4Yy4xNTMuMDUyLjMwNC4xMDIuNDYuMTQ5LjAzNi4wMS4wNzMuMDIzLjExMS4wMzMuMTU5LjA0OC4zMTMuMTA1LjQ3NC4xMzUgMTAuMjczIDEuODYzIDEzLjI1OC02LjE0NiAxMy4yNTgtNi4xNDYtMi41MDggMy4yNS02Ljk1OSA0LjEwNy0xMS4xNzQgMy4xNTMtLjE1Ni0uMDM2LS4zMTItLjA4Ni0uNDctLjEzMmExMS43NTMgMTEuNzUzIDAgMCAxLS42NjMtLjIwOWwuMDk1LjAyOS0uMDYyLS4wMjRjLS4xMzYtLjA0Ni0uMjY3LS4wOTctLjQtLjE0OGExLjUzIDEuNTMgMCAwIDAtLjA5OS0uMDM4bC0uMDExLS4wMDNjLS4xNDctLjA1OS0uMjktLjExOS0uNDMyLS4xODItLjAzMS0uMDEtLjA1Ny0uMDI0LS4wODgtLjAzNmExMy42NTYgMTMuNjU2IDAgMCAxLS41LS4yM2wuMTM4LjA2MWExLjQ4MyAxLjQ4MyAwIDAgMS0uMTA2LS4wNTJjLS4wOTQtLjA0NC0uMTg4LS4wOTQtLjI4LS4xNDFhMy43ODQgMy43ODQgMCAwIDEtLjIwNy0uMTA2bC4wMi4wMWMtLjExMy0uMDYtLjIyNi0uMTI1LS4zNC0uMTg2LS4wMzQtLjAyNC0uMDczLS4wNDQtLjExMi0uMDY2YTE0LjA1OCAxNC4wNTggMCAwIDEtLjUwMi0uMzA2bC4wNjMuMDM4YTIuMDQyIDIuMDQyIDAgMCAxLS4xMjQtLjA4M2wuMDA2LjAwNGE2LjAzOSA2LjAzOSAwIDAgMS0uMzE2LS4yMDhjLS4wMzQtLjAyMi0uMDY1LS4wNDYtLjEtLjA3YTguNDcgOC40NyAwIDAgMS0uMzE4LS4yMjhsLjAyNC4wMTdjLS4wNDItLjAzNC0uMDg3LS4wNjYtLjEzMi0uMDk5LS4wODgtLjA2OS0uMTc3LS4xMzUtLjI2NS0uMjA3bC0uMTE4LS4wOTRhMTAuMTYgMTAuMTYgMCAwIDEtLjM3LS4zMDlsLS4wMDEtLjAwMS0uMzQ3LS4zMTUtLjEtLjA5NGMtLjA4Mi0uMDgzLS4xNjYtLjE2Mi0uMjUtLjI0NGwtLjA5Ny0uMWE5LjAwOCA5LjAwOCAwIDAgMS0uMzAzLS4zMTVsLS4wMDYtLjAwNy0uMDE3LS4wMTRhMTcuODc3IDE3Ljg3NyAwIDAgMS0uMzEzLS4zNTNjLS4wMjctLjAzMS0uMDUyLS4wNjQtLjA4LS4wOTdsLS4yMjctLjI3NWExMy43NSAxMy43NSAwIDAgMS0uMy0uMzkxbC0uMDQtLjA1NkMyLjE1MiAxMS43OSAxLjMwNiA3LjQwNyAzLjE3NyAzLjgxMUwxLjUyNSA1LjlDLS42IDguOTM5LS4zMzcgMTIuODkxIDEuMjg4IDE2LjExOGMuMDM3LjA3OS4wNzguMTUzLjExOC4yMjh6Ii8+PHBhdGggZD0ibTguNTYzIDExLjk2OC0uMDExLS4wMTYtLjAwOS0uMDEyLjAyLjAyOHoiLz48cGF0aCBmaWxsPSIjMTI2NkE5IiBkPSJtOS42ODEgMTMuMjguMDkuMDljLjExNC4xMS4yMzEuMjE3LjM1LjMyNGwuMDE1LjAxM2MuMTIuMTA2LjI1NS4yMTcuMzk0LjMyNWwuMDIxLjAxNmMuMDM0LjAyMy4wNjMuMDUuMDk2LjA3My4xNC4xMDguMjgxLjIxMS40MjguMzE0bC4wMTUuMDA5Yy4wNjIuMDQ1LjEyOC4wODYuMTk4LjEzLjAyOC4wMTguMDYuMDQyLjA5LjA2LjEwNi4wNjguMjEuMTMxLjMxNy4xOTYuMDE3LjAwNy4wMzIuMDE2LjA0OC4wMjMuMDkuMDU1LjE4OC4xMDguMjgyLjE1Ni4wMzMuMDIuMDY1LjAzNS4wOTkuMDU0LjA2Ny4wMzMuMTMzLjA2OC4xOTcuMTAybC4wMzIuMDE0Yy4xMzUuMDY2LjI3My4xMjguNDA4LjE4OS4wMzQuMDEzLjA2My4wMjQuMDkyLjAzOC4xMTEuMDQ4LjIyNC4wOTQuMzM1LjEzNi4wNS4wMTcuMDk3LjAzNy4xNDQuMDUyLjEwMi4wMzguMjA5LjA3My4zMS4xMDhsLjE0LjA0NWMuMTQ2LjA0NS4yOTQuMTA0LjQ0OS4xMjhDMjIuMTY0IDE3LjE4MSAyNCAxMS4xMDQgMjQgMTEuMTA0Yy0xLjY1MyAyLjM2Ny00Ljg1MiAzLjQ5NS04LjI2MSAyLjYxNGE4LjIxNSA4LjIxNSAwIDAgMS0uNTA2LS4xNDVsLjA1Ny4wMTZjLS4wNDgtLjAxMy0uMDktLjAyOC0uMTM2LS4wNDItLjEwNC0uMDM2LS4yMTEtLjA3MS0uMzEyLS4xMDhsLS4xNDQtLjA1NGMtLjExMi0uMDQ1LS4yMjYtLjA4Ny0uMzM1LS4xMzUtLjAzNC0uMDE1LS4wNjUtLjAyNS0uMDkxLS4wNC0uMTQtLjA2My0uMjgxLS4xMjUtLjQxOC0uMTkxbC0uMjA2LS4xMDctLjExOS0uMDZjLS4wOTItLjA0OC0uMTc3LS4wOTgtLjI2NS0uMTQ5YS41NTguNTU4IDAgMCAxLS4wNjUtLjAzNmwuMDAzLjAwMWMtLjEwNi0uMDY2LS4yMTYtLjEzLS4zMTgtLjE5Ny0uMDM0LS4wMTktLjA2NS0uMDQyLS4wOTctLjA2MmwtLjIwOC0uMTM1Yy0uMTQ0LS4xLS4yODUtLjIwNy0uNDI4LS4zMTEtLjAzMi0uMDI5LS4wNjMtLjA1My0uMDk0LS4wNzktMS40OTktMS4xNzMtMi42ODEtMi43NzYtMy4yNDItNC41OTEtLjU5MS0xLjg4Ny0uNDYxLTQuMDAzLjU2LTUuNzJMOC4xMiAzLjM0MWMtMS41NDEgMi4yMDEtMS40NTQgNS4xNDMtLjI1NCA3LjQ3MS4yMTkuNDMuNDQxLjc5My42ODYgMS4xMzkuMjI4LjMyNi40OC43MDguNzg0Ljk3LjEwOC4xMjMuMjI0LjI0LjM0NS4zNTl6Ii8+PHBhdGggZD0ibTIuNDM2IDE3Ljk5Mi0uMDA0LS4wMDYtLjAwNy0uMDA5ek02LjU5NCAxNy4yNDhsLjAxLjAwNy4wMDIuMDAzeiIvPjxwYXRoIGZpbGw9IiMxMjY2QTkiIGQ9Ik0xMy42NjYgMS40MjdjLS45MDkgMS4zMjctLjk5NiAyLjk3NS0uMzcgNC40MzguNjY1IDEuNTU0IDIuMDI0IDIuNzc0IDMuNjA4IDMuMzUyLjA2NS4wMjUuMTI4LjA0Ni4xOTUuMDdsLjA4OC4wMjdjLjA5Mi4wMjkuMTg1LjA2My4yOC4wODQgNC4zODEuODQxIDUuNTY3LTIuMjM4IDUuODg2LTIuNjkxLTEuMDQzIDEuNDktMi43OTIgMS44NDgtNC45MzggMS4zMjlhNC43NTMgNC43NTMgMCAwIDEtLjU1LS4xN2wuMDMzLjAxMWE2LjE5NiA2LjE5NiAwIDAgMS0uNjU2LS4yN2wuMDM4LjAxN2MtLjQxLS4yLS43NjItLjQxNi0xLjA4OS0uNjY0LTEuOTE4LTEuNDUtMy4xMDQtNC4yMTEtMS44NTItNi40NmwtLjY3My45Mjd6Ii8+PC9zdmc+",
    },
  ];

  function ms(t) {
    let year, month, day, hour, minute, second;

    second = Math.floor(t / 1000);
    minute = Math.floor(second / 60);
    second = second % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    month = Math.floor(day / 30);
    day = day % 30;
    year = Math.floor(month / 12);
    month = month % 12;

    return { year, month, day, hour, minute, second };
  }

  const getDuration = (firstDuration, secondDuration) => {
    var a = moment(firstDuration);
    var b = moment(secondDuration);
    var difference = ms(a.diff(b));
    if (difference.year > 0) {
      difference = difference.year + " yrs";
    } else if (difference.month > 0) {
      difference = difference.month + " mos";
    } else {
      difference = difference.day + " days";
    }
    return difference;
  };

  const listItems = [
    'Developed flagship products, "Taxmann Store" and “Taxmann Research” using React Native.',
    "Engineered reusable, scalable code to optimize product functionality and ensure a seamless user experience.",
    "Actively mentored junior developers, creating a collaborative learning environment within the team.",
    "Demonstrated effective leadership by coordinating team efforts to achieve project goals.",
    "Collaborated closely with cross-functional teams to ensure cohesion and efficiency in product development.",
    "Pioneered innovative strategies to enhance app performance, resulting in measurable improvements and heightened user satisfaction.",
    "Worked closely with QA teams, implementing robust testing procedures to deliver bug-free, high-performance applications.",
  ];
  const typingSpeed = 100;

  return (
    <div class="container">
      <h1 style={{ fontSize: isMobile ? "1.3em" : "2em" }}>Skills</h1>
      <div class="marquee-container">
        <div class="marquee style-rX2oc" id="style-rX2oc">
          {topSkills.map((val) => (
            <div class="card" style={{backgroundColor: isDarkMode ?  'rgba(256, 256, 256, 0.07)' : 'rgba(0, 0, 0, 0.04)'}}>
              <img
                alt={val?.name}
                src={val?.img}
                decoding="async"
                data-nimg="1"
              />
              <div class="card-content">
                <p>{val?.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div class="marquee style-Cn1Y2" aria-hidden="true" id="style-Cn1Y2" >
          {topSkills.map((val) => (
            <div class="card" style={{backgroundColor: isDarkMode ?  'rgba(256, 256, 256, 0.07)' : 'rgba(0, 0, 0, 0.04)'}}>
              <img
                alt={val?.name}
                src={val?.img}
                decoding="async"
                data-nimg="1"
              />
              <div class="card-content">
                <p>{val?.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="marquee-container">
        <div class="marquee2 style-rX2oc" id="style-rX2oc">
          {bottomSkills.map((val) => (
            <div class="card" style={{backgroundColor: isDarkMode ?  'rgba(256, 256, 256, 0.07)' : 'rgba(0, 0, 0, 0.04)'}}>
              <img
                alt={val?.name}
                src={val?.img}
                decoding="async"
                data-nimg="1"
              />
              <div class="card-content">
                <p>{val?.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div class="marquee2 style-Cn1Y2" aria-hidden="true" id="style-Cn1Y2">
          {bottomSkills.map((val) => (
            <div class="card" style={{backgroundColor: isDarkMode ?  'rgba(256, 256, 256, 0.07)' : 'rgba(0, 0, 0, 0.04)'}}>
              <img
                alt={val?.name}
                src={val?.img}
                decoding="async"
                data-nimg="1"
              />
              <div class="card-content">
                <p>{val?.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 style={isMobile ? styles.mobileHeaderText2 : styles.headerText2}>
        Experience
      </h1>

      {/* <ExpandableCard
        cards={[
          {
            title: "Card 1",
            content: "Content for Card 1",
            listItems: [
              'Developed flagship products, "Taxmann Store" and “Taxmann Research” using React Native.',
              "Engineered reusable, scalable code to optimize product functionality and ensure a seamless user experience.",
              "Actively mentored junior developers, creating a collaborative learning environment within the team.",
              "Demonstrated effective leadership by coordinating team efforts to achieve project goals.",
              "Collaborated closely with cross-functional teams to ensure cohesion and efficiency in product development.",
              "Pioneered innovative strategies to enhance app performance, resulting in measurable improvements and heightened user satisfaction.",
              "Worked closely with QA teams, implementing robust testing procedures to deliver bug-free, high-performance applications.",
            ],
          },
          {
            title: "Card 2",
            content: "Content for Card 2",
            listItems: ["Item 2.1", "Item 2.2", "Item 2.3"],
          },
          // Add more cards as needed
        ]}
      /> */}

      <CollapsibleCard
        cardContent={{
          profileName: "React Native Developer",
          companyName: "Taxmann Technologies Pvt. Ltd.",
          logo: "https://media.licdn.com/dms/image/D4D0BAQGpHvxqOmu-Qg/company-logo_200_200/0/1696404086102/taxmann_technologies_private_limited_logo?e=1712793600&v=beta&t=qTfzOeyiWF_Xd0IphMDFiEHvZaXW29-ZiGoSCaZK7iI",
          role: "Full-time",
          location: "New Delhi, Delhi, India",
          mode: "On-site",
          joiningDate: "07-01-2023",
          exitDate: moment().format("MM-YY-YYYY"),
          achivements: [
            'Developed flagship products, "Taxmann Store" and “Taxmann Research” using React Native.',
            "Engineered reusable, scalable code to optimize product functionality and ensure a seamless user experience.",
            "Actively mentored junior developers, creating a collaborative learning environment within the team.",
            "Demonstrated effective leadership by coordinating team efforts to achieve project goals.",
            "Collaborated closely with cross-functional teams to ensure cohesion and efficiency in product development.",
            "Pioneered innovative strategies to enhance app performance, resulting in measurable improvements and heightened user satisfaction.",
            "Worked closely with QA teams, implementing robust testing procedures to deliver bug-free, high-performance applications.",
          ],
        }}
      />

      <CollapsibleCard
        cardContent={{
          profileName: "React Native Developer",
          logo: "https://media.licdn.com/dms/image/C510BAQGWxfiq2uVmuw/company-logo_200_200/0/1630596229516/code_brew_labs_logo?e=1712793600&v=beta&t=eSdeLgjt6HCsVlLDzw8btsRIQ_h_DrJtbX4tsnES_O0",
          companyName: "Code Brew Labs",
          role: "Full-time",
          location: "Chandigarh, India",
          mode: "On-site",
          joiningDate: "01-01-2021",
          exitDate: "07-01-2023",
          achivements: [
            "Crafted pixel-perfect and responsive UIs for seamless experiences on iOS and Android.",
            "Leveraged native APIs, enriching functionalities for an enhanced user experience.",
            "Resolved bugs and performance bottlenecks with precision, ensuring native-like performance.",
            "Actively contributed to the open-source community, providing timely solutions for React Native challenges.",
            "Maintained codebase integrity with industry best practices and automated tests.",
            "Collaborated with project management and marketing teams to align technical development with project goals.",
            "Maintained comprehensive technical documentation for effective knowledge transfer.",
            "Recognized for excellence and significant project contributions.",
          ],
        }}
      />

      <h1 style={isMobile ? styles.mobileHeaderText3 : styles.headerText3}>
        Education
      </h1>
      {isMobile ? (
        <>
        <EducationCardMobile
          cardContent={{
            profileName: "B. Tech in Computer Science",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png",
            companyName: "Lovely Professional University",
            location: "Phagwara, Punjab, India",
            mode: "2017",
          }}
        />
         <EducationCardMobile
          cardContent={{
            profileName: "Matriculation",
            logo: "https://media.licdn.com/dms/image/C510BAQE412vkBCXQ3Q/company-logo_200_200/0/1630617320562?e=1712793600&v=beta&t=PXR06vetzu-q7XFzFff3pYSOGd-7TjIh3VRqHUm7iVc",
            companyName: "St. John's School",
            location: "Faridabad, Haryana, India",
            mode: "2016",
          }}
        />
         <EducationCardMobile
          cardContent={{
            profileName: "Intermediate",
            logo: "https://media.licdn.com/dms/image/C510BAQE412vkBCXQ3Q/company-logo_200_200/0/1630617320562?e=1712793600&v=beta&t=PXR06vetzu-q7XFzFff3pYSOGd-7TjIh3VRqHUm7iVc",
            companyName: "St. John's School",
            location: "Faridabad, Haryana, India",
            mode: "2014",
          }}
        />
        </>
      ) : (
        <div class="education-container">
          <div class="education-card">
            <img
              src="https://media.licdn.com/dms/image/C510BAQE412vkBCXQ3Q/company-logo_200_200/0/1630617320562?e=1712793600&v=beta&t=PXR06vetzu-q7XFzFff3pYSOGd-7TjIh3VRqHUm7iVc"
              alt="Gurinder Singh logo"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "100px",
              }}
            />
            <div class="card-title">Matriculation</div>
            <div>
              <div class="card-subtitle">St. John's School</div>
              <div class="card-subtitle">Faridabad, Haryana</div>
            </div>
            <div class="card-year">2014</div>
          </div>
          <div class="education-card">
            <img
              src="https://media.licdn.com/dms/image/C510BAQE412vkBCXQ3Q/company-logo_200_200/0/1630617320562?e=1712793600&v=beta&t=PXR06vetzu-q7XFzFff3pYSOGd-7TjIh3VRqHUm7iVc"
              alt="Gurinder Singh logo"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "100px",
              }}
            />
            <div class="card-title">Intermediate</div>
            <div>
              <div class="card-subtitle">St. John's School</div>
              <div class="card-subtitle">Faridabad, Haryana</div>
            </div>
            <div class="card-year">2016</div>
          </div>
          <div class="education-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png"
              alt="Gurinder Singh logo"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "100px",
              }}
            />
            <div class="card-title">
              B. Tech<br></br>Computer Science
            </div>
            <div class="card-subtitle">Lovely Professional University</div>
            <div class="card-subtitle">Jalandhar, Punjab</div>
            <div class="card-year">2021</div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  headerText: {
    fontSize: "2em",
  },
  headerText2: {
    fontSize: "2em",
    marginTop: "80px",
  },
  headerText3: {
    fontSize: "2em",
    marginTop: "60px",
  },
  mobileHeaderText2: {
    fontSize: "1.3em",
    marginTop: "40px",
  },
  mobileHeaderText3: {
    fontSize: "1.3em",
    marginTop: "20px",
  },
  paraStyle: {
    fontSize: "1em",
  },
};
