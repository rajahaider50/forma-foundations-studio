package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun PublishingScreen(onCreate:()->Unit){Card{Column{Text("Publishing");Text("Domain-specific publishing workflow");Button(onClick=onCreate){Text("Create")}}}}
