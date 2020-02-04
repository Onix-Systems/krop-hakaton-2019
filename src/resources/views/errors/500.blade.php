<div class="content">
    <div class="title">Something went wrong.</div>
    @unless(empty($sentryID))
        <script src="https://cdn.ravenjs.com/3.3.0/raven.min.js"></script>
        <script>
          Raven.showReportDialog({
            eventId: '{{ $sentryID }}',
            dsn: '{{ env('SENTRY_LARAVEL_DSN') }}'
          });
        </script>
    @endunless
</div>
