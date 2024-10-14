"use client"
import { useState } from "react";

import { Box, CubeScan, Delivery, Verify } from "@/assets/svg";
import { Typography } from "@/common";
import { useFetch } from "@/services";
import { useStorage } from "@/hooks/useStorage";

import { Container, Content, Input, Step, Progress, StepLabel, Steps, Pulse } from "./styles";

interface Props {
  status: number;
};

export default () => {
  const [step, setStep] = useState({
    status: 0
  } as Props);

  const [loading, setLoading] = useState(false);
  const [storage, setStorage] = useStorage('@track-code', null);

  const handleInput = (evt: any) => {
    if (evt.key === 'Enter') {
      setLoading(true);

      useFetch({ method: 'GET', url: `tracking?session=${evt.target.value}` })
        .then(response => {
          setStep(response);
          setStorage(evt.target.value);
        })
        .finally(() => setLoading(false))
    };
  };

  const firstStep = {
    pulse: step.status === 1 ? 'active' : 'deactivate' as 'active' | 'deactivate' | 'completed',
    progress:
      step.status === 0 ? 'deactivate' :
        step.status >= 3 ? 'completed' :
          step.status >= 2 ? 'active' : 'deactivate' as 'active' | 'deactivate' | 'completed',
    stroke:
      step.status === 0 ? '#AEAEAE' :
        step.status >= 2 ? '#41B06E' :
          step.status >= 1 ? '#F55D00' : '#AEAEAE',
  };

  const secondStep = {
    pulse: step.status === 3 ? 'active' : 'deactivate' as 'active' | 'deactivate' | 'completed',
    progress:
      step.status === 0 ? 'deactivate' :
        step.status >= 5 ? 'completed' :
          step.status >= 4 ? 'active' : 'deactivate' as 'active' | 'deactivate' | 'completed',
    stroke:
      step.status === 0 ? '#AEAEAE' :
        step.status >= 4 ? '#41B06E' :
          step.status >= 3 ? '#F55D00' : '#AEAEAE',
  };

  const thirdStep = {
    pulse: step.status === 5 ? 'active' : 'deactivate' as 'active' | 'deactivate' | 'completed',
    progress:
      step.status === 0 ? 'deactivate' :
        step.status >= 7 ? 'completed' :
          step.status >= 6 ? 'active' : 'deactivate' as 'active' | 'deactivate' | 'completed',
    stroke:
      step.status === 0 ? '#AEAEAE' :
        step.status >= 6 ? '#41B06E' :
          step.status >= 5 ? '#F55D00' : '#AEAEAE',
  };

  const recipient = {
    pulse: step.status === 7 ? 'active' : 'deactivate' as 'active' | 'deactivate' | 'completed',
    progress:
      step.status === 0 ? 'deactivate' :
        step.status >= 7 ? 'completed' :
          step.status >= 6 ? 'active' : 'deactivate' as 'active' | 'deactivate' | 'completed',
    stroke:
      step.status === 0 ? '#AEAEAE' :
        step.status >= 8 ? '#41B06E' :
          step.status >= 7 ? '#F55D00' : '#AEAEAE',
  };

  return (
    <Container>
      <Content>

        <Steps>

          <Step>

            <Pulse background={firstStep.pulse}>
              <Box width={25} height={25} stroke={firstStep.stroke} strokeWidth={2} />
            </Pulse>

            <StepLabel>
              {step.status >= 2 &&
                <>
                  <Typography as="p" weight="500" color="dark_gray_500">pedido recebido</Typography>
                  <div style={{ height: 2 }} />
                </>
              }
              {step.status >= 1 &&
                <Typography as="p" size="light" color="dark_gray_700">pedido em andamento</Typography>
              }
            </StepLabel>

          </Step>

          <Progress background={firstStep.progress}>
            <span />
          </Progress>

          <Step>

            <Pulse background={secondStep.pulse}>
              <CubeScan width={25} height={25} stroke={secondStep.stroke} strokeWidth={2} />
            </Pulse>

            <StepLabel>
              {step.status >= 4 &&
                <>
                  <Typography as="p" weight="500" color="dark_gray_500">pedido embalado</Typography>
                  <div style={{ height: 2 }} />
                </>
              }
              {step.status >= 3 &&
                <Typography as="p" size="light" color="dark_gray_700">embalando pedido</Typography>
              }
            </StepLabel>

          </Step>

          <Progress background={secondStep.progress}>
            <span />
          </Progress>

          <Step>

            <Pulse background={thirdStep.pulse}>
              <Delivery width={25} height={25} stroke={thirdStep.stroke} strokeWidth={2} />
            </Pulse>

            <StepLabel>
              {step.status >= 6 &&
                <>
                  <Typography as="p" weight="500" color="dark_gray_500">correio</Typography>
                  <div style={{ height: 2 }} />
                </>
              }
              {step.status >= 5 &&
                <Typography as="p" size="light" color="dark_gray_700">encaminhando para o correio</Typography>
              }
            </StepLabel>
          </Step>

          <Progress background={thirdStep.progress}>
            <span />
          </Progress>

          <Step>

            <Pulse background={recipient.pulse}>
              <Verify width={25} height={25} stroke={recipient.stroke} strokeWidth={2} />
            </Pulse>

            <StepLabel>
              {step.status >= 8 &&
                <>
                  <Typography as="p" weight="500" color="dark_gray_500">entregue ao destinatário</Typography>
                  <div style={{ height: 2 }} />
                </>
              }
              {step.status >= 7 &&
                <Typography as="p" size="light" color="dark_gray_700">aguardando a entrega</Typography>
              }
            </StepLabel>

          </Step>

        </Steps>

      </Content>

      <Input placeholder="Código da Compra" onKeyDown={handleInput} />
    </Container>
  )
};