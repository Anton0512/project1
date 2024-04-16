import styled from 'styled-components';

export const STodoListApiContainer = styled.div`
  background-color: #6da0da;
  padding: 20px;
  min-width: 1280px;
  background-color: #6da0da;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 20px;
  gap: 10px;
`;

export const STitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const SButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;

export const SPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const SPhotoWrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  padding: 15px;
  width: 100%;
  border-radius: 5px;
`;

export const SPhotoImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const SPhotoTitle = styled.p`
  margin-top: 5px;
  text-align: center;
  color: white;
  font-size: 20px;
`;
