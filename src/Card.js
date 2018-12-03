import theme from './shared/Theme'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 500px;
`

export const Card = styled.div`
  margin: 12px;
  border-radius: 2px;
  width: calc(100% - 24px);
  font-size: 1.4rem;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`

export const CardHeader = styled.div`
  font-size: 1.6rem;
  color: #222;
  padding: 16px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CardContent = styled.div`
  display: block;
  padding: 13px 16px;
  font-size: 1.4rem;
  line-height: 1.4;
`

export const CardImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  border: 0;
`
