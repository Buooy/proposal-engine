@extends('layouts.master')

@section('content')
<main class="main-container">
    
    <section class="row">
        <div class="col-xs-12"><h3>All Proposals</h3></div>
    </section>
    
    <section class="row">
        <article class="col-xs-12">
            <table class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Preview URL</th>
                    </tr>
                </thead>
                <tbody>
                @foreach ($proposals as $proposal)
                    <tr>
                        <td>{{ $proposal->{'project-details-title'} }}</td>
                        <td>
                            <a target="_blank" href="/proposal/preview/{{ $proposal->uid }}">
                                {{ URL::to( 'proposal/preview/'.$proposal->uid ) }}
                            </a>
                        </td>
                    </tr>
                @endforeach    
                </tbody>
            </table>
        </article>
    </section>
    
</main>
@stop