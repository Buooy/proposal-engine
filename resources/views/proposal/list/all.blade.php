@extends('layouts.master')

@section('content')
<main class="main-container">
    
    <section class="row">
        <div class="col-xs-12"><h3>All Proposals</h3></div>
    </section>
    
    <section class="row">
        <article class="col-xs-12">
            @if (count($proposals) == 0)
                @include( 'proposal.list.empty' )
            @else
                @include( 'proposal.list.list' ) 
            @endif
        </article>
    </section>
    
</main>
@stop