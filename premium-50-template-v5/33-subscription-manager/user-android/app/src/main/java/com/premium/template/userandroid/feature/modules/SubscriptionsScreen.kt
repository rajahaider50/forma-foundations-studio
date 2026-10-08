package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun SubscriptionsScreen(onCreate:()->Unit){Card{Column{Text("Subscriptions");Text("Domain-specific subscriptions workflow");Button(onClick=onCreate){Text("Create")}}}}
