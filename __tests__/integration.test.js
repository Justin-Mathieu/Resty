import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '.';

import { rest } from 'msw';
import { setupServer } from 'msw/node '


const server = setupServer(
    rest.get('/test'), () => {

    }
)
