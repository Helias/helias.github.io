import Talk from './Talk';

export default function Events(): JSX.Element {
  return (
    <div id="events" className="pt-16 pb-20">
      <div className="relative w-full bg-black opacity-100">
        <img
          src="events/events.jpg"
          className="opacity-60 w-full h-[calc(100vh-4rem)] object-cover"
        />
        <div className="absolute inset-0">
          <div className="mt-5 ml-[20vw]">
            <h2 className="text-6xl text-white underline underline-offset-15">Events</h2>
            <div className="grid grid-cols-3 mt-20">
              <Talk
                image="events/gdg-devfest-2017.jpg"
                prefix="Speaker:"
                title="Telegram Bot Workshop - Google I/O Extended
        at the GDG in Catania"
                slides="https://slides.com/d/kr7YIK0/live"
                video="https://www.youtube.com/watch?v=_T_bvtKm3a8"
                interview="https://www.radiostartmeup.it/49-bot-perche-non-potrai-piu-farne-meno/"
                event="https://web.facebook.com/gdgcatania/posts/pfbid0RTL6trZEmwLJYXqesWbcxdbKWCvUjtUqXMyL8j6fE8A4JajvDzTZsuu2tyFxTZGfl?_rdc=1&_rdr#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
