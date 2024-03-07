// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jLAKfZafnfzEvtQB4DYUAe
import * as React from "react";
import { getActiveVariation } from "@plasmicapp/react-web/lib/splits";

export const splits = [];

export function getGlobalContextValueFromVariation(groupId, variation) {
  let groupValue = undefined;
  Object.keys(variation).forEach(variationKey => {
    const [_type, splitId] = variationKey.split(".");
    const sliceId = variation[variationKey];
    const split = splits.find(
      s => s.id === splitId || s.externalId === splitId
    );
    if (split) {
      const slice = split.slices.find(
        s => s.id === sliceId || s.externalId === sliceId
      );
      if (slice) {
        const content = slice.contents.find(c => c.groupId === groupId);
        if (content) {
          groupValue = content.variant;
        }
      }
    }
  });
  return groupValue;
}

export default function PlasmicSplitsProvider(props) {
  const { children, traits, ...rest } = props;
  const variation = getActiveVariation({
    splits,
    traits: traits ?? {},
    ...rest
  });
  return <>{children}</>;
}