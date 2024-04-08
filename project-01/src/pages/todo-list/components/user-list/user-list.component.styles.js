import styled from 'styled-components';

export const UserListContainer = styled.div`
  border: 1px solid #bf4f74;
  border-radius: 4px;
  padding: 0px 30px 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0 auto;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  margin-left: 20px;
  border: 2px solid #ccc;
  background: blue;
  border: 2px solid #bf4f74;
  color: white;
  padding: 0.25em 1em;
  width: 100px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
`;

export const DivWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 10px;
`;
