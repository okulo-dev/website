// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jLAKfZafnfzEvtQB4DYUAe
// Component: Z2neU2nUq1Gm
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: jLAKfZafnfzEvtQB4DYUAe/projectcss
import sty from "./PlasmicLogo.module.css"; // plasmic-import: Z2neU2nUq1Gm/css

createPlasmicElementProxy;

export const PlasmicLogo__VariantProps = new Array("_50Opaque", "largeLogo");

export const PlasmicLogo__ArgProps = new Array();

const $$ = {};

function PlasmicLogo__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "_50Opaque",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props._50Opaque
      },
      {
        path: "largeLogo",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.largeLogo
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        { [sty.root_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque") }
      )}
      href={`/`}
    >
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.img_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque"),
          [sty.imglargeLogo]: hasVariant($state, "largeLogo", "largeLogo")
        })}
        displayHeight={"100%"}
        displayMaxHeight={
          hasVariant($state, "largeLogo", "largeLogo") ? "none" : "none"
        }
        displayMaxWidth={
          hasVariant($state, "largeLogo", "largeLogo") ? "none" : "none"
        }
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={
          hasVariant($state, "largeLogo", "largeLogo") ? "100%" : "100%"
        }
        src={
          hasVariant($state, "largeLogo", "largeLogo")
            ? {
                src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHpvb21BbmRQYW49Im1hZ25pZnkiIHZpZXdCb3g9IjAgMCAxNTAgMTUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2ZXJzaW9uPSIxLjAiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJ2Tk5rMVJiVERQZ0RhIj4KICAgICAgPHBhdGggZD0iTTUuMjg1IDI4LjUwNGgxMzkuOHY5Mi43SDUuMjg2em0wIDAiIGNsaXAtcnVsZT0ibm9uemVybyIvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aCBpZD0idk5OazFSYlREUGdEYiI+CiAgICAgIDxwYXRoIGQ9Ik02Ni41MTYgNzFIOTV2Mkg2Ni41MTZ6bTAgMCIgY2xpcC1ydWxlPSJub256ZXJvIi8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJ2Tk5rMVJiVERQZ0RjIj4KICAgICAgPHBhdGggZD0iTTY2LjUxNiA3NUg5NXYxSDY2LjUxNnptMCAwIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9InZOTmsxUmJURFBnRGQiPgogICAgICA8cGF0aCBkPSJNNjYuNTE2IDc5SDgzdjFINjYuNTE2em0wIDAiIGNsaXAtcnVsZT0ibm9uemVybyIvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aCBpZD0idk5OazFSYlREUGdEZSI+CiAgICAgIDxwYXRoIGQ9Ik0xMTYgODJoM3YyLjY4OGgtM3ptMCAwIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9InZOTmsxUmJURFBnRGYiPgogICAgICA8cGF0aCBkPSJNMTIwIDc4aDIuMzE2djNIMTIwem0wIDAiIGNsaXAtcnVsZT0ibm9uemVybyIvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aCBpZD0idk5OazFSYlREUGdEZyI+CiAgICAgIDxwYXRoIGQ9Ik05NCA4MmgzdjIuNjg4aC0zem0wIDAiIGNsaXAtcnVsZT0ibm9uemVybyIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTY5LjU2MyAzMS4wNDNjLTIzLjY0NSAwLTQ0LjYzMyAxNS4zNzUtNTcuODE3IDI3LjkxaDQuMDg2YzEyLjU1NS0xMS41OSAzMS45NTctMjUuMjMgNTMuNzMtMjUuMjMgMzcuODU2IDAgNjguNTQ3IDQxLjIzNCA2OC41NDcgNDEuMjM0cy0zMC42OTEgNDEuMjMtNjguNTQ3IDQxLjIzYy0yMC40MzMgMC0zOC43NjktMTIuMDA3LTUxLjMyOC0yMy4wNjJoLTMuOTM3YzEzLjI1OCAxMi4wMiAzMy4wOSAyNS41NDMgNTUuMjYyIDI1LjU0MyAzOS45MSAwIDcyLjI2MS00My44MTMgNzIuMjYxLTQzLjgxM3MtMzIuMzUtNDMuODEyLTcyLjI2LTQzLjgxMnptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDxnIGNsaXAtcGF0aD0idXJsKCN2Tk5rMVJiVERQZ0RhKSI+CiAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0iYnV0dCIgdHJhbnNmb3JtPSJtYXRyaXgoLjMzNzY3IDAgMCAuMzM4MzIgNS40IDI4LjUwNCkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGQ9Ik0xOTAuMDIgNy41MDRDMTE5Ljk5NyA3LjUwNCA1Ny44NCA1Mi45NSAxOC43OTYgOTBoMTIuMTAxYzM3LjE4LTM0LjI1NyA5NC42NC03NC41NzUgMTU5LjEyMy03NC41NzUgMTEyLjExIDAgMjAzLjAwMiAxMjEuODggMjAzLjAwMiAxMjEuODhTMzAyLjEyOSAyNTkuMTcxIDE5MC4wMiAyNTkuMTcxYy02MC41MTQgMC0xMTQuODE2LTM1LjQ5Mi0xNTIuMDA4LTY4LjE2OEgyNi4zNWMzOS4yNjMgMzUuNTI3IDk3Ljk5NSA3NS41IDE2My42NTcgNzUuNSAxMTguMTk1IDAgMjE0LjAwNC0xMjkuNSAyMTQuMDA0LTEyOS41cy05NS44MS0xMjkuNS0yMTQuMDA0LTEyOS41em0wIDAiIHN0cm9rZT0iIzE5MWI1NyIgc3Ryb2tlLXdpZHRoPSIxNSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTIuMjI1IDgzLjY1NmguNzU4YzMuNTExIDAgNi4xNDgtMi42MzMgNi4xNDgtNi4xNDh2LTIuNjhjMC0zLjUxNi0yLjYzNy02LjE0OS02LjE0OC02LjE0OWgtLjc1OGMtMy41MTYgMC02LjE0OSAyLjYzMy02LjE0OSA2LjE0OXYyLjY4YzAgMy41MTUgMi42MzMgNi4xNDggNi4xNDkgNi4xNDh6bTAtMi42MWMtMi4wNjcgMC0zLjU0LTEuNDcyLTMuNTQtMy41Mzh2LTIuNjhjMC0yLjA2NiAxLjQ3My0zLjU0IDMuNTQtMy41NGguNzU4YzIuMDY2IDAgMy41MzUgMS40NzQgMy41MzUgMy41NHYyLjY4YzAgMi4wNjYtMS40NjkgMy41MzktMy41MzUgMy41Mzl6bTkuMzk1IDIuNjFoMS42NjRjLjMwOSAwIC40NzMtLjE2OC40NzMtLjQ3N3YtNC44MTZjMC0uMjM4LjA3LS40MjYuMjYyLS41OTRsMi40MjItMi4wMTVhLjQ1LjQ1IDAgMDEuMzA4LS4xNDVjLjExNyAwIC4yNjIuMDk0LjM1Ni4yNjJsNC4yOTYgNy40NTNhLjYxLjYxIDAgMDAuNTcuMzMyaDEuOTkzYy4yNjIgMCAuNDMtLjExNy40My0uMzA5IDAtLjA3LS4wNTEtLjE2OC0uMDk4LS4yNjFsLTUuMi04Ljk5NmEuNjEyLjYxMiAwIDAxLS4wNy0uMjYyYzAtLjE0LjA0Ny0uMjg1LjE5Mi0uNDAybDQuOTg0LTQuMTUzYy4xMTctLjEyLjE5Mi0uMjM4LjE5Mi0uMzMyIDAtLjE0NC0uMTQ1LS4yNjItLjQwNy0uMjYyaC0yLjg3YS44MDkuODA5IDAgMDAtLjU5NC4yMTFsLTYuMTcyIDUuMmMtLjExOC4wOTMtLjIxNS4xNDQtLjMwOS4xNDQtLjE2NCAwLS4yODUtLjE0NC0uMjg1LS40MDZ2LTkuODc1YzAtLjMwOS0uMTY0LS40NzMtLjQ3My0uNDczSDIxLjYyYy0uMzA4IDAtLjQ3Mi4xNjQtLjQ3Mi40NzN2MTkuMjI2YzAgLjMxLjE2NC40NzcuNDcyLjQ3N3ptMTkuNzI2IDBoLjc1OGE2LjQ4MyA2LjQ4MyAwIDAwMy4wMzktLjczNC41MDIuNTAyIDAgMDEuMjM4LS4wNzVjLjE2NCAwIC4yNjIuMTIyLjI2Mi4zMzIgMCAuMjYyLjIxLjQ3Ny40NzMuNDc3aDEuNjY0YS40NzguNDc4IDAgMDAuNDcyLS40NzdWNjkuMTUyYS40MzkuNDM5IDAgMDAtLjQ0OS0uNDczaC0xLjY4N2EuNDcyLjQ3MiAwIDAwLS40NzMuNDczdjguMzU2YzAgMi4wNjYtMS40NzMgMy41MzktMy41NCAzLjUzOWgtLjc1N2MtMi4wNjYgMC0zLjUzOS0xLjQ3My0zLjUzOS0zLjU0di04LjM1NWEuNDcyLjQ3MiAwIDAwLS40NzMtLjQ3M2gtMS42NmEuNDc1LjQ3NSAwIDAwLS40NzYuNDczdjguMzU2YzAgMy41MTUgMi42MzYgNi4xNDggNi4xNDggNi4xNDh6bTkuNzUzIDBoMS42NjRhLjQ3NS40NzUgMCAwMC40NzMtLjQ3N1Y2My45NTNhLjQ3NC40NzQgMCAwMC0uNDczLS40NzNoLTEuNjY0YS40NzcuNDc3IDAgMDAtLjQ3My40NzN2MTkuMjI2YzAgLjI2Mi4yMTUuNDc3LjQ3My40Nzd6bTEwLjMwNSAwaC43NTdjMy41MTIgMCA2LjE0OS0yLjYzMyA2LjE0OS02LjE0OHYtMi42OGMwLTMuNTE2LTIuNjM3LTYuMTQ5LTYuMTQ5LTYuMTQ5aC0uNzU3Yy0zLjUxNiAwLTYuMTQ5IDIuNjMzLTYuMTQ5IDYuMTQ5djIuNjhjMCAzLjUxNSAyLjYzMyA2LjE0OCA2LjE0OSA2LjE0OHptMC0yLjYxYy0yLjA2NyAwLTMuNTQtMS40NzItMy41NC0zLjUzOHYtMi42OGMwLTIuMDY2IDEuNDczLTMuNTQgMy41NC0zLjU0aC43NTdjMi4wNjcgMCAzLjUzNiAxLjQ3NCAzLjUzNiAzLjU0djIuNjhjMCAyLjA2Ni0xLjQ3IDMuNTM5LTMuNTM2IDMuNTM5em0wIDAiIGZpbGw9IiMxOTFiNTciIGZpbGwtb3BhY2l0eT0iMSIvPgogIDxwYXRoIGZpbGw9IiMxOTFiNTciIGQ9Ik0xMDUuOCA2OC4xNzJIOTQuMDdhLjE4OC4xODggMCAwMS0uMTg3LS4xODhjMC0uMTAxLjA4Ni0uMTgzLjE4Ny0uMTgzaDExLjczYy4xMDIgMCAuMTg4LjA4Mi4xODguMTgzYS4xODguMTg4IDAgMDEtLjE4Ny4xODh6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNOTQuMjAzIDY4LjExN2wtMy45MSAzLjkxYS4xODYuMTg2IDAgMTEtLjI2Ni0uMjYxbDMuOTEtMy45MWEuMTg2LjE4NiAwIDAxLjI2NiAwIC4xODIuMTgyIDAgMDEwIC4yNjF6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8ZyBjbGlwLXBhdGg9InVybCgjdk5OazFSYlREUGdEYikiPgogICAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTY2LjcwMyA3MS43MUg5NC4wN2MuMTA2IDAgLjE4OC4wODMuMTg4LjE4NWEuMTg1LjE4NSAwIDAxLS4xODguMTg3SDY2LjcwM2EuMTg1LjE4NSAwIDAxLS4xODctLjE4N2MwLS4xMDIuMDgyLS4xODQuMTg3LS4xODR6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8L2c+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTk0LjIwMyA3MS43NjZsNy44MiA3LjgxNmEuMTg2LjE4NiAwIDAxMCAuMjY2LjE4Ni4xODYgMCAwMS0uMjY1IDBsLTcuODItNy44MmEuMTg2LjE4NiAwIDExLjI2Ni0uMjYyem0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTEwMS44OSA3OS41MjdoNy44MmEuMTkuMTkgMCAwMS4xODguMTg4LjE4OC4xODggMCAwMS0uMTg3LjE4N2gtNy44MmEuMTg4LjE4OCAwIDAxLS4xODgtLjE4Ny4xOS4xOSAwIDAxLjE4OC0uMTg4em0tNC4wNDItMy44NTVsMy45MS0zLjkwNmEuMTg2LjE4NiAwIDAxLjI2NSAwIC4xODIuMTgyIDAgMDEwIC4yNjFsLTMuOTEgMy45MWEuMTg2LjE4NiAwIDAxLS4yNjUgMCAuMTk0LjE5NCAwIDAxMC0uMjY1em0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTEwMS44OSA3MS43MWgxMS43MzFjLjEwMiAwIC4xODguMDgzLjE4OC4xODVhLjE4OC4xODggMCAwMS0uMTg4LjE4N2gtMTEuNzNhLjE4OC4xODggMCAwMS0uMTg4LS4xODdjMC0uMTAyLjA4Ni0uMTg0LjE4OC0uMTg0em0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI3ZOTmsxUmJURFBnRGMpIj4KICAgIDxwYXRoIGZpbGw9IiMxOTFiNTciIGQ9Ik02Ni43MDMgNzUuNjE3SDk0LjA3Yy4xMDYgMCAuMTg4LjA4Ni4xODguMTg4YS4xODUuMTg1IDAgMDEtLjE4OC4xODdINjYuNzAzYS4xODUuMTg1IDAgMDEtLjE4Ny0uMTg3YzAtLjEwMi4wODItLjE4OC4xODctLjE4OHptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDwvZz4KICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNOTQuMjAzIDc1LjY3Nmw3LjgyIDcuODE2YS4xODYuMTg2IDAgMDEwIC4yNjYuMTg2LjE4NiAwIDAxLS4yNjUgMGwtNy44Mi03LjgyYS4xODYuMTg2IDAgMTEuMjY2LS4yNjJ6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNMTAxLjg5IDgzLjQzOGgxNS42NDFhLjE5LjE5IDAgMDEuMTg4LjE4Ny4xODguMTg4IDAgMDEtLjE4OC4xODhoLTE1LjY0YS4xODguMTg4IDAgMDEtLjE4OC0uMTg4LjE5LjE5IDAgMDEuMTg4LS4xODh6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNMTA5LjU3OCA4My40OTJsMy45MS0zLjkxYS4xOTQuMTk0IDAgMDEuMjY2IDBjLjA3LjA3NC4wNy4xOTEgMCAuMjY2bC0zLjkxIDMuOTFhLjE4Ni4xODYgMCAwMS0uMjY2IDAgLjE4Ni4xODYgMCAwMTAtLjI2NnptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDxwYXRoIGZpbGw9IiMxOTFiNTciIGQ9Ik0xMTMuNjIxIDc5LjUyN2g3LjgyYS4xOS4xOSAwIDAxLjE4OC4xODguMTg4LjE4OCAwIDAxLS4xODguMTg3aC03LjgyYS4xODUuMTg1IDAgMDEtLjE4Ny0uMTg3YzAtLjEwMi4wODItLjE4OC4xODctLjE4OHptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDxnIGNsaXAtcGF0aD0idXJsKCN2Tk5rMVJiVERQZ0RkKSI+CiAgICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNNjYuNzAzIDc5LjUyN0g4Mi4zNGMuMTA1IDAgLjE4Ny4wODYuMTg3LjE4OGEuMTg1LjE4NSAwIDAxLS4xODcuMTg3SDY2LjcwM2EuMTg1LjE4NSAwIDAxLS4xODctLjE4N2MwLS4xMDIuMDgyLS4xODguMTg3LS4xODh6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8L2c+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTgyLjQ3MyA3OS41ODJsMy45MSAzLjkxYS4xODYuMTg2IDAgMDEwIC4yNjYuMTg2LjE4NiAwIDAxLS4yNjYgMGwtMy45MDYtMy45MWEuMTg2LjE4NiAwIDExLjI2Mi0uMjY2em0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTg2LjI1IDgzLjQzOGg3LjgyYy4xMDYgMCAuMTg4LjA4NS4xODguMTg3YS4xODUuMTg1IDAgMDEtLjE4OC4xODhoLTcuODJhLjE4OC4xODggMCAwMS0uMTg4LS4xODguMTkuMTkgMCAwMS4xODgtLjE4OHptMjguMjktMTEuNDg1YS45MTkuOTE5IDAgMTEtMS44MzUtLjExNS45MTkuOTE5IDAgMDExLjgzNC4xMTV6bS0zLjkxMSA3LjgyYS45Mi45MiAwIDAxLTEuODM2LS4xMTMuOTIzLjkyMyAwIDAxLjk3My0uODYzLjkyMi45MjIgMCAwMS44NjMuOTc2em0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI3ZOTmsxUmJURFBnRGUpIj4KICAgIDxwYXRoIGZpbGw9IiMxOTFiNTciIGQ9Ik0xMTguNDUgODMuNjg0YS45Mi45MiAwIDExLTEuODM0LS4xMTguOTIuOTIgMCAwMTEuODMzLjExOHptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDwvZz4KICA8ZyBjbGlwLXBhdGg9InVybCgjdk5OazFSYlREUGdEZikiPgogICAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTEyMi4zNiA3OS43NzNhLjkyMi45MjIgMCAwMS0uOTc3Ljg2LjkxOC45MTggMCAwMS0uODYtLjk3My45MjMuOTIzIDAgMDEuOTczLS44NjMuOTIyLjkyMiAwIDAxLjg2My45NzZ6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8L2c+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTEwNy43NyA2OC4xMDVhLjk5Mi45OTIgMCAwMS0xLjA2LjkxOC45OTIuOTkyIDAgMTExLjA1OS0uOTE4bS0uMzktLjAzYS41OTguNTk4IDAgMTAtMS4xOTQtLjA4LjU5OC41OTggMCAwMDEuMTk0LjA4em0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI3ZOTmsxUmJURFBnRGcpIj4KICAgIDxwYXRoIGZpbGw9IiMxOTFiNTciIGQ9Ik05Ni4wMDQgODMuNzQ2YS45OTIuOTkyIDAgMDEtMS4wNTkuOTE4Ljk5Mi45OTIgMCAxMTEuMDU5LS45MThtLS4zOS0uMDI3YS41OTQuNTk0IDAgMDAtLjU1NS0uNjM3LjU5NS41OTUgMCAxMC0uMDgyIDEuMTg4LjU5NS41OTUgMCAwMC42MzYtLjU1MXptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDwvZz4KPC9zdmc+Cg==",
                fullWidth: 150,
                fullHeight: 150,
                aspectRatio: 1
              }
            : {
                src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHpvb21BbmRQYW49Im1hZ25pZnkiIHZpZXdCb3g9IjAgMCAzNzUgMzc1IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2ZXJzaW9uPSIxLjAiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJWWm5MbW5EOGR2dzNhIj4KICAgICAgPHBhdGggZD0iTTEzLjIxNSA3MS4yNjJoMzQ5LjV2MjMxLjc1aC0zNDkuNXptMCAwIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9IlZabkxtbkQ4ZHZ3M2IiPgogICAgICA8cGF0aCBkPSJNMTY2LjI5MyAxNzlIMjM2djJoLTY5LjcwN3ptMCAwIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9IlZabkxtbkQ4ZHZ3M2MiPgogICAgICA8cGF0aCBkPSJNMTY2LjI5MyAxODlIMjM2djFoLTY5LjcwN3ptMCAwIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9IlZabkxtbkQ4ZHZ3M2QiPgogICAgICA8cGF0aCBkPSJNMTY2LjI5MyAxOThIMjA3djJoLTQwLjcwN3ptMCAwIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9IlZabkxtbkQ4ZHZ3M2UiPgogICAgICA8cGF0aCBkPSJNMjkxIDIwNmg2djUuNzIzaC02em0wIDAiIGNsaXAtcnVsZT0ibm9uemVybyIvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aCBpZD0iVlpuTG1uRDhkdnczZiI+CiAgICAgIDxwYXRoIGQ9Ik0zMDEgMTk2aDQuNzkzdjZIMzAxem0wIDAiIGNsaXAtcnVsZT0ibm9uemVybyIvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aCBpZD0iVlpuTG1uRDhkdnczZyI+CiAgICAgIDxwYXRoIGQ9Ik0yNjQgMTY3LjQ3M2g2VjE3M2gtNnptMCAwIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9IlZabkxtbkQ4ZHZ3M2giPgogICAgICA8cGF0aCBkPSJNMjM1IDIwNmg2djUuNzIzaC02em0wIDAiIGNsaXAtcnVsZT0ibm9uemVybyIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTE3My45MDYgNzcuNjA1Yy01OS4xMSAwLTExMS41ODIgMzguNDQyLTE0NC41MzkgNjkuNzc4aDEwLjIxNWMzMS4zODctMjguOTc3IDc5Ljg5LTYzLjA3IDEzNC4zMjQtNjMuMDcgOTQuNjQgMCAxNzEuMzY3IDEwMy4wNzggMTcxLjM2NyAxMDMuMDc4cy03Ni43MjYgMTAzLjA3OC0xNzEuMzY3IDEwMy4wNzhjLTUxLjA4MiAwLTk2LjkyNi0zMC4wMi0xMjguMzItNTcuNjZoLTkuODQ0YzMzLjE0IDMwLjA1IDgyLjcyNyA2My44NTkgMTM4LjE1NiA2My44NTkgOTkuNzcgMCAxODAuNjUzLTEwOS41MzEgMTgwLjY1My0xMDkuNTMxUzI3My42NjggNzcuNjA1IDE3My44OTggNzcuNjA1em0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI1ZabkxtbkQ4ZHZ3M2EpIj4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJidXR0IiB0cmFuc2Zvcm09Im1hdHJpeCguODQ0MTcgMCAwIC44NDU4IDEzLjQ5OCA3MS4yNikiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGQ9Ik0xOTAuMDIgNy41MDJDMTE5Ljk5OSA3LjUwMiA1Ny44NCA1Mi45NTIgMTguNzk5IDkwaDEyLjFDNjguMDggNTUuNzQxIDEyNS41MzggMTUuNDMyIDE5MC4wMiAxNS40MzJjMTEyLjExMSAwIDIwMy4wMDIgMTIxLjg3IDIwMy4wMDIgMTIxLjg3cy05MC44OSAxMjEuODctMjAzLjAwMiAxMjEuODdjLTYwLjUxMiAwLTExNC44MTgtMzUuNDkyLTE1Mi4wMDgtNjguMTcySDI2LjM1YzM5LjI1OCAzNS41MyA5Ny45OTggNzUuNTAxIDE2My42NiA3NS41MDEgMTE4LjE4NyAwIDIxNC0xMjkuNSAyMTQtMTI5LjVzLTk1LjgxMy0xMjkuNS0yMTQtMTI5LjV6bTAgMCIgc3Ryb2tlPSIjMTkxYjU3IiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiAgPC9nPgogIDxwYXRoIGQ9Ik0zMC41NTYgMjA5LjE0aDEuODk5YzguNzg1IDAgMTUuMzctNi41ODYgMTUuMzctMTUuMzcxdi02LjcwM2MwLTguNzg1LTYuNTg1LTE1LjM3MS0xNS4zNy0xNS4zNzFoLTEuODk5Yy04Ljc4IDAtMTUuMzY3IDYuNTg2LTE1LjM2NyAxNS4zN3Y2LjcwNGMwIDguNzg1IDYuNTg2IDE1LjM3MSAxNS4zNjcgMTUuMzcxem0wLTYuNTI3Yy01LjE2IDAtOC44NC0zLjY4LTguODQtOC44NDR2LTYuNzAzYzAtNS4xNjQgMy42OC04Ljg0NCA4Ljg0LTguODQ0aDEuODk5YzUuMTY0IDAgOC44NDQgMy42OCA4Ljg0NCA4Ljg0NHY2LjcwM2MwIDUuMTY0LTMuNjggOC44NDQtOC44NDQgOC44NDR6bTIzLjQ5NiA2LjUyN2g0LjE1N2MuNzcgMCAxLjE4Ny0uNDE0IDEuMTg3LTEuMTg3di0xMi4wNDdjMC0uNTk0LjE3Ni0xLjA2Ny42NTMtMS40OGw2LjA1LTUuMDQ4Yy4yMzktLjIzOC41MzUtLjM1NS43NzQtLjM1NS4yOTcgMCAuNjUyLjIzOC44OS42NTJsMTAuNzM5IDE4LjYzM2MuMjk3LjUzNS43NzMuODMyIDEuNDI1LjgzMmg0Ljk4NWMuNjUyIDAgMS4wNjYtLjI5NyAxLjA2Ni0uNzcgMC0uMTgtLjExNy0uNDE3LS4yMzQtLjY1NmwtMTIuOTk2LTIyLjQ4OGExLjUyNyAxLjUyNyAwIDAxLS4xOC0uNjUyYzAtLjM1Ni4xMjEtLjcxNS40NzctMS4wMDhsMTIuNDYtMTAuMzg3Yy4yOTctLjI5Ny40NzMtLjU5NC40NzMtLjgzMiAwLS4zNTUtLjM1NS0uNjUyLTEuMDA4LS42NTJoLTcuMThjLS41OTMgMC0xLjAwNy4xMi0xLjQ4NC41MzVsLTE1LjQzIDEyLjk5NmMtLjI5Ni4yMzgtLjUzLjM1Ni0uNzY5LjM1Ni0uNDE0IDAtLjcxLS4zNTYtLjcxLTEuMDA4di0yNC42ODhjMC0uNzctLjQxOS0xLjE4Ny0xLjE4OC0xLjE4N2gtNC4xNTdjLS43NyAwLTEuMTgzLjQxOC0xLjE4MyAxLjE4N3Y0OC4wNjdjMCAuNzczLjQxNCAxLjE4NyAxLjE4MyAxLjE4N3ptNDkuMzExIDBoMS44OTljMi43ODkgMCA1LjM0My0uNjUyIDcuNTk3LTEuODQuMjM5LS4xMTcuNDE0LS4xOC41OTQtLjE4LjQxNCAwIC42NTIuMjk3LjY1Mi44MzMgMCAuNjUyLjUzNiAxLjE4NyAxLjE4OCAxLjE4N2g0LjE1MmMuNjUzIDAgMS4xODgtLjUzNSAxLjE4OC0xLjE4N3YtMzUuMDdjLjA1OC0uNjUzLS40NzctMS4xODgtMS4xMy0xLjE4OGgtNC4yMWMtLjY1MiAwLTEuMTg4LjUzNS0xLjE4OCAxLjE4N3YyMC44ODdjMCA1LjE2NC0zLjY4IDguODQ0LTguODQzIDguODQ0aC0xLjg5OWMtNS4xNiAwLTguODQtMy42OC04Ljg0LTguODQ0di0yMC44ODdjMC0uNjUyLS41MzUtMS4xODctMS4xODctMS4xODdIODkuMThjLS42NTMgMC0xLjE4NC41MzUtMS4xODQgMS4xODd2MjAuODg3YzAgOC43ODUgNi41ODYgMTUuMzcxIDE1LjM2NyAxNS4zNzF6bTI0LjM4NyAwaDQuMTU1Yy42NTMgMCAxLjE4OC0uNTM1IDEuMTg4LTEuMTg3di00OC4wNjdjMC0uNjUyLS41MzUtMS4xODctMS4xODgtMS4xODdoLTQuMTU2Yy0uNjUyIDAtMS4xODMuNTM1LTEuMTgzIDEuMTg3djQ4LjA2N2MwIC42NTIuNTMgMS4xODcgMS4xODMgMS4xODd6bTI1Ljc1MyAwaDEuODk4YzguNzg2IDAgMTUuMzcyLTYuNTg2IDE1LjM3Mi0xNS4zNzF2LTYuNzAzYzAtOC43ODUtNi41ODYtMTUuMzcxLTE1LjM3Mi0xNS4zNzFoLTEuODk4Yy04Ljc4MSAwLTE1LjM2NyA2LjU4Ni0xNS4zNjcgMTUuMzd2Ni43MDRjMCA4Ljc4NSA2LjU4NiAxNS4zNzEgMTUuMzY3IDE1LjM3MXptMC02LjUyN2MtNS4xNiAwLTguODQtMy42OC04Ljg0LTguODQ0di02LjcwM2MwLTUuMTY0IDMuNjgtOC44NDQgOC44NC04Ljg0NGgxLjg5OGM1LjE2NCAwIDguODQ0IDMuNjggOC44NDQgOC44NDR2Ni43MDNjMCA1LjE2NC0zLjY4IDguODQ0LTguODQ0IDguODQ0em0wIDAiIGZpbGw9IiMxOTFiNTciIGZpbGwtb3BhY2l0eT0iMSIvPgogIDxwYXRoIGZpbGw9IiMxOTFiNTciIGQ9Ik0yNjQuNSAxNzAuNDM0aC0yOS4zMjRhLjQ2Ny40NjcgMCAwMTAtLjkzNEgyNjQuNWEuNDY4LjQ2OCAwIDExMCAuOTM0em0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTIzNS41MDggMTcwLjI5N2wtOS43NzQgOS43NzNhLjQ2NC40NjQgMCAwMS0uNjYgMCAuNDY0LjQ2NCAwIDAxMC0uNjZsOS43NzQtOS43NzNhLjQ2NC40NjQgMCAwMS42NiAwIC40NjQuNDY0IDAgMDEwIC42NnptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDxnIGNsaXAtcGF0aD0idXJsKCNWWm5MbW5EOGR2dzNiKSI+CiAgICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNMTY2Ljc1NCAxNzkuMjczaDY4LjQyMmMuMjYyIDAgLjQ2OS4yMDcuNDY5LjQ3YS40NjQuNDY0IDAgMDEtLjQ3LjQ2NGgtNjguNDIxYS40NjcuNDY3IDAgMTEwLS45MzR6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8L2c+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTIzNS41MDggMTc5LjQxbDE5LjU1IDE5LjU1YS40NjQuNDY0IDAgMDEwIC42NjEuNDY0LjQ2NCAwIDAxLS42NiAwbC0xOS41NS0xOS41NWEuNDY0LjQ2NCAwIDAxMC0uNjYuNDY0LjQ2NCAwIDAxLjY2IDB6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNMjU0LjcyNyAxOTguODI0aDE5LjU1YS40NjcuNDY3IDAgMTEwIC45MzRoLTE5LjU1YS40NjcuNDY3IDAgMDEwLS45MzR6bS0xMC4xMDYtOS42NGw5Ljc3Ny05Ljc3NGEuNDY0LjQ2NCAwIDAxLjY2IDAgLjQ2NC40NjQgMCAwMTAgLjY2bC05Ljc3NyA5Ljc3NGEuNDY0LjQ2NCAwIDAxLS42NiAwIC40NjQuNDY0IDAgMDEwLS42NnptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDxwYXRoIGZpbGw9IiMxOTFiNTciIGQ9Ik0yNTQuNzI3IDE3OS4yNzNoMjkuMzI0YS40NjguNDY4IDAgMTEwIC45MzRoLTI5LjMyNGEuNDYzLjQ2MyAwIDAxLS40NjUtLjQ2NWMwLS4yNjIuMjA3LS40NjkuNDY1LS40Njl6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8ZyBjbGlwLXBhdGg9InVybCgjVlpuTG1uRDhkdnczYykiPgogICAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTE2Ni43NTQgMTg5LjA0N2g2OC40MjJhLjQ2OC40NjggMCAxMTAgLjkzN2gtNjguNDIyYS40Ny40NyAwIDAxLS40NjktLjQ2OC40Ny40NyAwIDAxLjQ2OS0uNDd6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8L2c+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTIzNS41MDggMTg5LjE4NGwxOS41NSAxOS41NWEuNDY0LjQ2NCAwIDAxMCAuNjYuNDY0LjQ2NCAwIDAxLS42NiAwbC0xOS41NS0xOS41NWEuNDY0LjQ2NCAwIDAxMC0uNjYuNDcyLjQ3MiAwIDAxLjY2IDB6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNMjU0LjcyNyAyMDguNTk4aDM5LjEwMWEuNDY3LjQ2NyAwIDAxMCAuOTMzaC0zOS4xMDFhLjQ2My40NjMgMCAwMS0uNDY1LS40NjVjMC0uMjYxLjIwNy0uNDY4LjQ2NS0uNDY4em0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTI3My45NDUgMjA4LjczNGw5Ljc3OC05Ljc3M2EuNDY0LjQ2NCAwIDAxLjY2IDAgLjQ2NC40NjQgMCAwMTAgLjY2bC05Ljc3OCA5Ljc3NGEuNDY0LjQ2NCAwIDAxLS42NiAwIC40NjQuNDY0IDAgMDEwLS42NnptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDxwYXRoIGZpbGw9IiMxOTFiNTciIGQ9Ik0yODQuMDUgMTk4LjgyNGgxOS41NTJhLjQ2Ny40NjcgMCAxMTAgLjkzNEgyODQuMDVhLjQ2Ny40NjcgMCAwMTAtLjkzNHptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDxnIGNsaXAtcGF0aD0idXJsKCNWWm5MbW5EOGR2dzNkKSI+CiAgICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNMTY2Ljc1NCAxOTguODI0aDM5LjA5OGEuNDY4LjQ2OCAwIDExMCAuOTM0aC0zOS4wOThhLjQ2Ny40NjcgMCAxMTAtLjkzNHptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDwvZz4KICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNMjA2LjE4NCAxOTguOTZsOS43NzMgOS43NzRhLjQ2NC40NjQgMCAwMTAgLjY2LjQ2NC40NjQgMCAwMS0uNjYgMGwtOS43NzQtOS43NzNhLjQ2NC40NjQgMCAwMTAtLjY2LjQ2NC40NjQgMCAwMS42NiAwem0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTIxNS42MjkgMjA4LjU5OGgxOS41NDdjLjI2MiAwIC40NjkuMjA3LjQ2OS40NjhhLjQ2NC40NjQgMCAwMS0uNDcuNDY1SDIxNS42M2EuNDY3LjQ2NyAwIDExMC0uOTMzem03MC43MTUtMjguNzE1YTIuMyAyLjMgMCAwMS0yLjQzNCAyLjE1MiAyLjMgMi4zIDAgMDEtMi4xNTItMi40MzcgMi4yOTUgMi4yOTUgMCAwMTIuNDMzLTIuMTQ5IDIuMjk0IDIuMjk0IDAgMDEyLjE1MyAyLjQzNHptLTkuNzc0IDE5LjU0N2EyLjI5OCAyLjI5OCAwIDExLTIuMTUyLTIuNDM0IDIuMjk4IDIuMjk4IDAgMDEyLjE1MiAyLjQzNHptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDxnIGNsaXAtcGF0aD0idXJsKCNWWm5MbW5EOGR2dzNlKSI+CiAgICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNMjk2LjExNyAyMDkuMjA3YTIuMjk2IDIuMjk2IDAgMTEtNC41ODItLjI4MXYtLjAwNGEyLjI5IDIuMjkgMCAwMTIuNDM0LTIuMTQ5IDIuMjkzIDIuMjkzIDAgMDEyLjE0OCAyLjQzNHptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDwvZz4KICA8ZyBjbGlwLXBhdGg9InVybCgjVlpuTG1uRDhkdnczZikiPgogICAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTMwNS44OTUgMTk5LjQzYTIuMjk4IDIuMjk4IDAgMTEtMi4xNTItMi40MzQgMi4yOTggMi4yOTggMCAwMTIuMTUyIDIuNDM0em0wIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgPC9nPgogIDxnIGNsaXAtcGF0aD0idXJsKCNWWm5MbW5EOGR2dzNnKSI+CiAgICA8cGF0aCBmaWxsPSIjMTkxYjU3IiBkPSJNMjY5LjQzIDE3MC4yNThhMi40OCAyLjQ4IDAgMDEtNC45NDYtLjM0OCAyLjQ3NyAyLjQ3NyAwIDAxMi42NDktMi4yOTcgMi40OCAyLjQ4IDAgMDEyLjI5NyAyLjY0NW0tLjk4NS0uMDY3YTEuNDkyIDEuNDkyIDAgMTAtMi45NzYtLjIxIDEuNDkgMS40OSAwIDAwMS4zODMgMS41OSAxLjQ5MSAxLjQ5MSAwIDAwMS41OTMtMS4zOHptMCAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDwvZz4KICA8ZyBjbGlwLXBhdGg9InVybCgjVlpuTG1uRDhkdnczaCkiPgogICAgPHBhdGggZmlsbD0iIzE5MWI1NyIgZD0iTTI0MC4wMTIgMjA5LjM2M2EyLjQ3OSAyLjQ3OSAwIDAxLTIuNjQ1IDIuMjk3IDIuNDggMi40OCAwIDAxLjM1Mi00Ljk0NSAyLjQ3OSAyLjQ3OSAwIDAxMi4yOTMgMi42NDhtLS45OC0uMDdhMS40OTIgMS40OTIgMCAxMC0yLjk3Ny0uMjExIDEuNDkyIDEuNDkyIDAgMDAyLjk3Ni4yMTF6bTAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICA8L2c+Cjwvc3ZnPgo=",
                fullWidth: 150,
                fullHeight: 150,
                aspectRatio: 1
              }
        }
      />
    </a>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogo__ArgProps,
          internalVariantPropNames: PlasmicLogo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogo";
  } else {
    func.displayName = `PlasmicLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicLogo = Object.assign(
  // Top-level PlasmicLogo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicLogo
    internalVariantProps: PlasmicLogo__VariantProps,
    internalArgProps: PlasmicLogo__ArgProps
  }
);

export default PlasmicLogo;
/* prettier-ignore-end */