import styled from "styled-components";

export const Container = styled.div`
  padding: 200px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 2; /* maior que o ::before para aparecer acima */
  
  h2 {
    color: var(--white);
    font-size: 62px;
    font-weight: 600;
    margin-bottom: 35px;
  }
  p {
    color: var(--white);
    margin-bottom: 25px;
  }
  span {
    background-color: var(--blue);
    border: 0;
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
    padding: 12px 40px; /* diminuído para algo mais usual */
    display: inline-block;
    line-height:24px;
    cursor: pointer;
  }
`;
