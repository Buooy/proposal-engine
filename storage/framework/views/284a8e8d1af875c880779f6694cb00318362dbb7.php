<div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" data-toggle="collapse" data-target=".navbar-collapse" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button><a href="/" class="navbar-brand">
            <i class="fa fa-anchor"></i><span style="margin-left: 10px">The Dock</span></a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="<?php echo e(request()->path() == "proposals" ? 'active' : 'n'); ?>"><a href="/proposals">Proposals</a></li>
                <li class="<?php echo e(request()->path() == "invoices" ? 'active' : 'n'); ?>"><a href="/invoices">Invoices</a></li>
                <li class="<?php echo e(request()->path() == "estimates" ? 'active' : 'n'); ?>"><a href="/estimates">Estimates (coming soon)</a></li>
            </ul>

            <?php if(Auth::guest()): ?>
            <ul class="nav navbar-nav navbar-right">
                <li class="<?php echo e(request()->path() == "login" ? 'active' : 'n'); ?>"><a href="/login">Login</a></li>
            </ul>
            <?php else: ?>
            <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    <img src="<?php echo e(Auth::user()->getAvatarUrl()); ?>" width="25" height="25" /> <?php echo e(Auth::user()->fullname); ?> <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="<?php echo e(route('account.dashboard')); ?>"><i class="fa fa-btn fa-user"></i> My Account</a></li>
                    <li><a href="<?php echo e(route('logout')); ?>"><i class="fa fa-btn fa-sign-out"></i> Logout</a></li>
                </ul>
            </li>
            </ul>
            <?php endif; ?>
        </div>
    </div>
</div>