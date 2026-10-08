package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun PipelinesScreen(onCreate:()->Unit){Card{Column{Text("Pipelines");Text("Domain-specific pipelines workflow");Button(onClick=onCreate){Text("Create")}}}}
