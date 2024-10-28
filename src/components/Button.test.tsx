
import { expect, browser } from '@wdio/globals'
import { fn } from '@wdio/browser-runner'
import { render, screen } from '@testing-library/react'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import {Button} from './Button'

describe('Button', () => {
    it('should render its children', async () => {
        const spy = fn();
        render(<Button onClick={spy}>Content</Button>)
        const component = screen.getByText(/Content/i)

        await component.click()
        
        expect(component).toBeInTheDocument()
        expect(spy).toBeCalledTimes(1);

        await expect(browser).toMatchScreenSnapshot('button');
    })
    

    it('should be able to be disabled', async () => {
        const spy = fn();
        render(<Button disabled onClick={spy}>Content</Button>)

        const component = screen.getByText(/Content/i)
        await expect(component).toBePresent()

        await component.click()
        
        expect(spy).toBeCalledTimes(0);

        await expect(browser).toMatchScreenSnapshot('button-disabled');
    })
})
