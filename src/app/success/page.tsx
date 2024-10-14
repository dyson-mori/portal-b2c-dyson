import React from "react";
import type { Metadata } from "next";

import { stripe } from "@/services";

import Screen from "./screen";

type ParamsProps = {
  params: object;
  searchParams: {
    session_id: string
  };
};

export async function generateMetadata({ searchParams }: ParamsProps): Promise<Metadata> {
  const session = searchParams.session_id;

  const res = await fetch(`http://localhost:3000/api/tracking`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      session
    })
  })
    .then(jsn => jsn.json())

  // if (!res.ok) {
  //   throw new Error(`fail`)
  // };

  return {
    title: 'Mori | Agradecemos pela compra',
  };
};

export default async function CompletePage({ searchParams }: ParamsProps) {
  const data = await stripe.checkout.sessions.retrieve(searchParams.session_id, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  return <Screen product={data} />;
}

/*
 * @params: http://localhost:3000/success
 * ?payment_intent=pi_3Q7IbfFQmzXupGEA0cPVHjmh
 * &payment_intent_client_secret=pi_3Q7IbfFQmzXupGEA0cPVHjmh_secret_XN3lrj2osnEtDyXJK4L9w2Ny3
 * &redirect_status=succeeded
 * 
 * http://localhost:3000/success?session_id=cs_test_a1MRbDNgcburAZI5DXQDnx2YubTqFGVl46Tygt6Yt5zdZuxa1zFe4Ql4Zw
 * 
 * http://localhost:3000/success?session_id=cs_test_b12AMYxAraOU99MfxiCxxCh0GanLujwTCAGoWObG8YTCNbKQiWOPDr6O2s
*/