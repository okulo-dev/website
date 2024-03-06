// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jLAKfZafnfzEvtQB4DYUAe
// Component: gVGVMBx2x42k
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Logo from "../../Logo"; // plasmic-import: Z2neU2nUq1Gm/component
import Button from "../../Button"; // plasmic-import: 1njYuUl2Bkl4/component
import { useScreenVariants as useScreenVariantsa5G59FrFlpm9 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: a5g59frFLPM9/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: jLAKfZafnfzEvtQB4DYUAe/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: gVGVMBx2x42k/css

createPlasmicElementProxy;

export const PlasmicNavbar__VariantProps = new Array();

export const PlasmicNavbar__ArgProps = new Array();

const $$ = {};

function PlasmicNavbar__RenderFunc(props) {
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
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsa5G59FrFlpm9()
  });
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___3UqMl)}
      >
        <Logo
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames("__wab_instance", sty.logo)}
          largeLogo={
            hasVariant(globalVariants, "screen", "mobile") ? undefined : true
          }
        />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__a8ZAu)}
        >
          <Button
            className={classNames("__wab_instance", sty.button___05CxO)}
            color={"navLink"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__n7E4N)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___62Iqn)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vfOXo
              )}
            >
              {"How it Work"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button___8TFmj)}
            color={"navLink"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__tOhg0)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__rslnl)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pzdU
              )}
            >
              {"Pricing"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__cseOa)}
            color={"navLink"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__cXxv)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__jw28L)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5A5Wz
              )}
            >
              {"FAQs"}
            </div>
          </Button>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___4Hn8D)}
        >
          <Button
            className={classNames("__wab_instance", sty.button___9UtK)}
            color={"navLink"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__gq5XB)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__vQsG)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Log in"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__soVbu)}
            color={"navLinkBlue"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___18YbI)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__zQUrB)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {hasVariant(globalVariants, "screen", "mobile")
              ? "Watch Demo"
              : "Get a quote"}
          </Button>
        </Stack__>
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
