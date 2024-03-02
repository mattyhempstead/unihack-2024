// THIS IS SSR
import { getStore, reset, increment } from '@/store/test';

export default async function Test() {

    return <div>
        <p>
            TEST STORE
        </p>

        <p>
            Press a button and then refresh the page.
        </p>

        <p>
            {new Date().toString()}
        </p>

        <br></br>

        <p>
            store: {JSON.stringify(await getStore())}
        </p>

        <form action={reset}>
            <button type="submit">Reset</button>
        </form>

        <form action={increment}>
            <button type="submit">Increment</button>
        </form>
    </div>
}
