import { NextRequest, NextResponse } from "next/server";

import { prisma } from '@/services/prisma';
import { stripe } from "@/services";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get("session");

  const track = await prisma.track.findFirst({
    where: {
      id: id!
    }
  });

  if (!track) {
    throw new Error('track fail')
    // return NextResponse.json({ message: 'nothing' });
  };

  return NextResponse.json(track);
};

export async function POST(request: NextRequest) {
  const { session } = await request.json();

  const track = await prisma.track.findMany({
    where: {
      stripe_id: session
    }
  });

  if (track.length > 0) {
    return NextResponse.json({ message: 'sakosk' });
  };

  const data = await stripe.checkout.sessions.retrieve(session, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const result = await prisma.track.create({
    data: {
      stripe_id: session,
      status: 1,
      message: 'pedido em andamento'
    }
  });

  if (!result) {
    return NextResponse.json({ message: 'fail' });
  };

  return NextResponse.json({ message: 'created' });
};

export async function PUT(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get("session");

  const { status } = await request.json();

  const track = await prisma.track.update({
    where: {
      id: id!
    },
    data: {
      status
    }
  });

  if (!track) {
    return NextResponse.json({ message: 'fail' });
  };

  return NextResponse.json({ message: 'done' });
};

const array = [
  {
    id: '2f4399bf-e49f-403e-afd0-9521deb6674f',

    status: 5,

    purchase_id: 'cs_test_b1Y2zjWm0YZbJkB7bfeLmhg22RZMD1EkF64dxHjhFz6EnxwlTyKAvNvNQe',
    amount_subtotal: 39705000,
    amount_total: 39705000,
    payment_intent: "pi_3Q8BdzFQmzXupGEA0OCbWA5y",
    customer_details: {
      address: {
        city: "Contagem",
        country: "BR",
        line1: "Rua Acácias 920",
        line2: "casa 1, Eldorado",
        postal_code: "32025-035",
        state: "MG"
      },
      email: "ssergiojunioleal@gmail.com",
      name: "sergio junio leal",
      phone: null,
      tax_exempt: "none",
      tax_ids: []
    },
    products: [
      {
        id: "li_1Q8BWjFQmzXupGEAMLdas8F4",
        object: "item",
        amount_discount: 0,
        amount_subtotal: 14525000,
        amount_tax: 0,
        amount_total: 14525000,
        currency: "brl",
        description: "Road King™ Special",
        price: {
          id: "price_1Q7P6LFQmzXupGEADd2dURBG",
          object: "price",
          active: true,
          billing_scheme: "per_unit",
          created: 1728338905,
          currency: "brl",
          custom_unit_amount: null,
          livemode: false,
          lookup_key: null,
          metadata: {},
          nickname: null,
          product: {
            id: "prod_QzNsCPzspicTQ8",
            object: "product",
            active: true,
            attributes: [],
            created: 1728338905,
            default_price: "price_1Q7P6LFQmzXupGEADd2dURBG",
            description: "Muito torque em uma potência sob demanda que você pode sentir a cada giro do acelerador, acompanhada do clássico ronco H-D. #glasses",
            images: [
              "https://files.stripe.com/links/MDB8YWNjdF8xUTZoQ3dGUW16WHVwR0VBfGZsX3Rlc3RfcG9pUFBzQURFRkIyWmE2T1hxQWhwc3Az00vuEsWNeL"
            ],
            livemode: false,
            marketing_features: [],
            metadata: {},
            name: "Road King™ Special",
            package_dimensions: null,
            shippable: null,
            statement_descriptor: null,
            tax_code: null,
            type: "service",
            unit_label: null,
            updated: 1728414423,
            url: null
          },
          recurring: null,
          tax_behavior: "unspecified",
          tiers_mode: null,
          transform_quantity: null,
          type: "one_time",
          unit_amount: 14525000,
          unit_amount_decimal: "14525000"
        },
        quantity: 1
      },
      {
        id: "li_1Q8BWjFQmzXupGEARY3TRZHX",
        object: "item",
        amount_discount: 0,
        amount_subtotal: 25180000,
        amount_tax: 0,
        amount_total: 25180000,
        currency: "brl",
        description: "Sportster™ S",
        price: {
          id: "price_1Q7PJrFQmzXupGEABUdtb3Wc",
          object: "price",
          active: true,
          billing_scheme: "per_unit",
          created: 1728339743,
          currency: "brl",
          custom_unit_amount: null,
          livemode: false,
          lookup_key: null,
          metadata: {},
          nickname: null,
          product: {
            id: "prod_QzO6FAX7lqztwQ",
            object: "product",
            active: true,
            attributes: [],
            created: 1728339743,
            default_price: "price_1Q7PJrFQmzXupGEABUdtb3Wc",
            description: "Fundamentada em um legado nascido em 1957, a sofisticadamente bruta Sportster S da Harley-Davidson traz uma versão avançada das características que todos adoravam nos modelos que a precederam #chains",
            images: [
              "https://files.stripe.com/links/MDB8YWNjdF8xUTZoQ3dGUW16WHVwR0VBfGZsX3Rlc3RfNEJhcVdsSW1sdUJ2dEZEN0poYUgzTFY100eOHzbTC8"
            ],
            livemode: false,
            marketing_features: [],
            metadata: {},
            name: "Sportster™ S",
            package_dimensions: null,
            shippable: null,
            statement_descriptor: null,
            tax_code: null,
            type: "service",
            unit_label: null,
            updated: 1728414343,
            url: null
          },
          recurring: null,
          tax_behavior: "unspecified",
          tiers_mode: null,
          transform_quantity: null,
          type: "one_time",
          unit_amount: 12590000,
          unit_amount_decimal: "12590000"
        },
        quantity: 2
      }
    ]
  }
];

/*

  0 = pedido em andamento
  1 = pedido recebido

Road King™ SpecialRoad King™ Special
Road King™ Special
Sportster™ S
🎉 Agradecemos imensamente pela sua compra! 🎉
Estamos preparando o seu produto e entraremos em contato em breve :)

{
  "id": "cs_test_b1Y2zjWm0YZbJkB7bfeLmhg22RZMD1EkF64dxHjhFz6EnxwlTyKAvNvNQe",
  "object": "checkout.session",
  "after_expiration": null,
  "allow_promotion_codes": null,
  "amount_subtotal": 39705000,
  "amount_total": 39705000,
  "automatic_tax": {
    "enabled": false,
    "liability": null,
    "status": null
  },
  "billing_address_collection": "required",
  "cancel_url": "http://localhost:3000/purchase",
  "client_reference_id": null,
  "client_secret": null,
  "consent": null,
  "consent_collection": null,
  "created": 1728525053,
  "currency": "brl",
  "currency_conversion": null,
  "custom_fields": [],
  "custom_text": {
    "after_submit": null,
    "shipping_address": null,
    "submit": null,
    "terms_of_service_acceptance": null
  },
  "customer": null,
  "customer_creation": "if_required",
  "customer_details": {
    "address": {
      "city": "Contagem",
      "country": "BR",
      "line1": "Rua Acácias 920",
      "line2": "casa 1, Eldorado",
      "postal_code": "32025-035",
      "state": "MG"
    },
    "email": "ssergiojunioleal@gmail.com",
    "name": "sergio junio leal",
    "phone": null,
    "tax_exempt": "none",
    "tax_ids": []
  },
  "customer_email": null,
  "expires_at": 1728611452,
  "invoice": null,
  "invoice_creation": {
    "enabled": false,
    "invoice_data": {
      "account_tax_ids": null,
      "custom_fields": null,
      "description": null,
      "footer": null,
      "issuer": null,
      "metadata": {},
      "rendering_options": null
    }
  },
  "line_items": {
    "object": "list",
    "data": [
      {
        "id": "li_1Q8BWjFQmzXupGEAMLdas8F4",
        "object": "item",
        "amount_discount": 0,
        "amount_subtotal": 14525000,
        "amount_tax": 0,
        "amount_total": 14525000,
        "currency": "brl",
        "description": "Road King™ Special",
        "price": {
          "id": "price_1Q7P6LFQmzXupGEADd2dURBG",
          "object": "price",
          "active": true,
          "billing_scheme": "per_unit",
          "created": 1728338905,
          "currency": "brl",
          "custom_unit_amount": null,
          "livemode": false,
          "lookup_key": null,
          "metadata": {},
          "nickname": null,
          "product": {
            "id": "prod_QzNsCPzspicTQ8",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1728338905,
            "default_price": "price_1Q7P6LFQmzXupGEADd2dURBG",
            "description": "Muito torque em uma potência sob demanda que você pode sentir a cada giro do acelerador, acompanhada do clássico ronco H-D. #glasses",
            "images": [
              "https://files.stripe.com/links/MDB8YWNjdF8xUTZoQ3dGUW16WHVwR0VBfGZsX3Rlc3RfcG9pUFBzQURFRkIyWmE2T1hxQWhwc3Az00vuEsWNeL"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {},
            "name": "Road King™ Special",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1728414423,
            "url": null
          },
          "recurring": null,
          "tax_behavior": "unspecified",
          "tiers_mode": null,
          "transform_quantity": null,
          "type": "one_time",
          "unit_amount": 14525000,
          "unit_amount_decimal": "14525000"
        },
        "quantity": 1
      },
      {
        "id": "li_1Q8BWjFQmzXupGEARY3TRZHX",
        "object": "item",
        "amount_discount": 0,
        "amount_subtotal": 25180000,
        "amount_tax": 0,
        "amount_total": 25180000,
        "currency": "brl",
        "description": "Sportster™ S",
        "price": {
          "id": "price_1Q7PJrFQmzXupGEABUdtb3Wc",
          "object": "price",
          "active": true,
          "billing_scheme": "per_unit",
          "created": 1728339743,
          "currency": "brl",
          "custom_unit_amount": null,
          "livemode": false,
          "lookup_key": null,
          "metadata": {},
          "nickname": null,
          "product": {
            "id": "prod_QzO6FAX7lqztwQ",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1728339743,
            "default_price": "price_1Q7PJrFQmzXupGEABUdtb3Wc",
            "description": "Fundamentada em um legado nascido em 1957, a sofisticadamente bruta Sportster S da Harley-Davidson traz uma versão avançada das características que todos adoravam nos modelos que a precederam #chains",
            "images": [
              "https://files.stripe.com/links/MDB8YWNjdF8xUTZoQ3dGUW16WHVwR0VBfGZsX3Rlc3RfNEJhcVdsSW1sdUJ2dEZEN0poYUgzTFY100eOHzbTC8"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {},
            "name": "Sportster™ S",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1728414343,
            "url": null
          },
          "recurring": null,
          "tax_behavior": "unspecified",
          "tiers_mode": null,
          "transform_quantity": null,
          "type": "one_time",
          "unit_amount": 12590000,
          "unit_amount_decimal": "12590000"
        },
        "quantity": 2
      }
    ],
    "has_more": false,
    "url": "/v1/checkout/sessions/cs_test_b1Y2zjWm0YZbJkB7bfeLmhg22RZMD1EkF64dxHjhFz6EnxwlTyKAvNvNQe/line_items"
  },
  "livemode": false,
  "locale": null,
  "metadata": {},
  "mode": "payment",
  "payment_intent": "pi_3Q8BdzFQmzXupGEA0OCbWA5y",
  "payment_link": null,
  "payment_method_collection": "if_required",
  "payment_method_configuration_details": null,
  "payment_method_options": {
    "card": {
      "request_three_d_secure": "automatic"
    }
  },
  "payment_method_types": [
    "card"
  ],
  "payment_status": "paid",
  "phone_number_collection": {
    "enabled": false
  },
  "recovered_from": null,
  "saved_payment_method_options": null,
  "setup_intent": null,
  "shipping_address_collection": {
    "allowed_countries": [
      "BR"
    ]
  },
  "shipping_cost": null,
  "shipping_details": {
    "address": {
      "city": "Contagem",
      "country": "BR",
      "line1": "Rua Acácias 920",
      "line2": "casa 1, Eldorado",
      "postal_code": "32025-035",
      "state": "MG"
    },
    "name": "sergio junio leal"
  },
  "shipping_options": [],
  "status": "complete",
  "submit_type": null,
  "subscription": null,
  "success_url": "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
  "total_details": {
    "amount_discount": 0,
    "amount_shipping": 0,
    "amount_tax": 0
  },
  "ui_mode": "hosted",
  "url": null
}


*/